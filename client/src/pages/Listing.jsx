import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import {
    FaBath,
    FaBed,
    FaChair,
    FaMapMarkerAlt,
    FaParking,
    FaShare,
    FaWifi,

} from 'react-icons/fa';
import { BiCctv } from "react-icons/bi";
import Contact from '../components/Contact';


// https://sabe.io/blog/javascript-format-numbers-commas#:~:text=The%20best%20way%20to%20format,format%20the%20number%20with%20commas.



export default function Listing() {

    SwiperCore.use([Navigation]);
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [copied, setCopied] = useState(false);
    const [contact, setContact] = useState(false); 
    const params = useParams();
    const { currentUser } = useSelector((state) => state.user);
    // console.log(currentUser._id, listing?userRef);

    useEffect(() => {
        const fetchListing = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/listing/get/${params.listingId}`);
                const data = await res.json();
                if (data.success === false) {
                    setError(true);
                    setLoading(false);
                    return;
                }
                setListing(data);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchListing();
    }, [params.listingId]); // update it only when listingId is updated
    console.log(loading);


    const openGoogleMaps = () => {
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(listing.address)}`;
        window.open(googleMapsUrl, "_blank");
    };



    return (
        <main className='text-white'>
            {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
            {error && (
                <p className='text-center my-7 text-2xl'>Something went wrong!</p>
            )}
            {listing && !loading && !error && (
                <div>
                    <Swiper navigation>
                        {listing.imageUrls.map((url) => (
                            <SwiperSlide key={url}>
                                <div
                                    className='h-[550px]'
                                    style={{
                                        background: `url(${url}) center no-repeat`,
                                        backgroundSize: 'cover',
                                    }}
                                ></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    {/* Share funcitonality */}
                    <div className='fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-zinc-800 cursor-pointer'>
                        <FaShare
                            className='text-gray-200'
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                setCopied(true);
                                setTimeout(() => {
                                    setCopied(false);
                                }, 2000);
                            }}
                        />
                    </div>
                    {copied && (
                        <p className=' text-white  fixed top-[23%] right-[5%] z-10 rounded-md bg-zinc-600 p-2'>
                            Link copied!
                        </p>
                    )}


                    <div className='flex text-white  flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
                        <p className='flex flex-col text-4xl font-bold'>
                            <div className='pb-4 '> {listing.name} </div>
                            <div className='text-sm  font-medium sm:flex '>
                                <div className='pr-8 text-red-400 opacity-80'>{`Regular Price - ${listing.regularPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`} {listing.type === 'rent' && ' / month'}</div>
                                <div className='text-green-500'>{`Dicounted Price - ${listing.discountPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`} {listing.type === 'rent' && ' / month'}</div>
                            </div>
                        </p>


                        <p onClick={openGoogleMaps} className='flex items-center mt-6 gap-2 text-gray-200  text-sm hover:underline cursor-pointer'>
                            <FaMapMarkerAlt className='text-green-400  ' />
                            {listing.address}
                        </p>
                        <div className='flex gap-4'>
                            <p className='bg-red-800 w-full max-w-[200px] text-white font-semibold cursor-pointer hover:opacity-90  text-center p-1 rounded-md'>
                                {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
                            </p>
                            {/* {(
                                <p className='bg-green-400 w-full max-w-[200px] text-white text-center p-1 rounded-md'>
                                    {`Discount- ${(+listing.regularPrice - +listing.discountPrice).toLocaleString('en-IN', { style: 'currency', currency: 'INR' }) }`}
                                </p>
                            )} */}
                        </div>
                        <p className='text-gray-200'>
                            <span className='font-bold  text-white'>Description - </span>
                            {listing.description}
                        </p>
                        <ul className='text-violet-300 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6'>
                            <li className='flex items-center gap-1 whitespace-nowrap '>
                                <FaBed className='text-lg' />
                                {listing.bedrooms > 1
                                    ? `${listing.bedrooms} beds `
                                    : `${listing.bedrooms} bed `}
                            </li>
                            <li className='flex items-center gap-1 whitespace-nowrap '>
                                <FaChair className='text-lg' />
                                {listing.furnished ? 'Fully Furnished' : 'Unfurnished'}
                            </li>
                            <li className='flex items-center gap-1 whitespace-nowrap '>
                                <BiCctv className='text-lg' />
                                {listing.cctv ? 'CCTV' : 'No CCTV'}
                            </li>
                            <li className='flex items-center gap-1 whitespace-nowrap '>
                                <FaWifi className='text-lg' />
                                {listing.wifi ? 'High Speed wifi' : 'No wifi'}
                            </li>
                            <li className='flex items-center gap-1 whitespace-nowrap '>
                                <FaParking className='text-lg' />
                                {listing.parking ? 'Parking spot' : 'No Parking'}
                            </li>
                            <li className='flex items-center gap-1 whitespace-nowrap '>
                                <FaBath className='text-lg' />
                                {listing.privateBathroom ? 'Private Bathroom' : 'Common Bathroom'}
                            </li>
                        </ul>

                        {/* Only show this button if the user is logged in and is not the owner*/}
                        {currentUser && listing.userRef !== currentUser._id && !contact && (
                            <button onClick={() => setContact(true)} className='bg-slate-700 text-white rounded-lg uppercase hover:opacity-90 p-3 my-4'>
                                Contact landlord
                            </button>
                        )}
                        
                        {contact && <Contact listing={listing} />}

                    </div>

                </div>
            )}
        </main>
    );
}