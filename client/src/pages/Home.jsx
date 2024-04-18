import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem.jsx';
import { ReactTyped } from "react-typed";


export default function Home() {
  // const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  // console.log(offerListings);


  useEffect(() => {
    // const fetchOfferListings = async () => {
    //   try {
    //     const res = await fetch('/api/listing/get?offer=true&limit=4');
    //     const data = await res.json();
    //     setOfferListings(data);
    //     fetchRentListings();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    // fetchOfferListings();
    fetchRentListings();
  }, []);


  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-16 px-3 max-w-6xl mx-auto '>
        <h1 className='text-violet-400 text-3xl lg:text-5xl'>
          <span className='text-violet-500 font-bold  '>ComfortCrib </span>
          <span className='opacity-80 '>Where comfort meets Convenience!</span>
        </h1>
        <div className='text-gray-200 text-2xl sm:text-4xl text-center my-1'>
          <ReactTyped
            className=""
            strings={[
              "Find Your Perfect Place",
              "Seamless Living Solutions",
              "Without any Brokerage",
            ]}
            typeSpeed={80}
            backSpeed={40}
            loop={true}
          />
        </div>

        <Link
          to={'/search'}
            className='text-center text-sm sm:text-lg text-white font-bold '
        >
          <p className='  sm:w-[300px] mx-auto rounded-lg text-green-600  hover:opacity-85'>{`Let's`} get started... </p>
          </Link>
       
      </div>

      {/* swiper */}
      <Swiper navigation>
        {saleListings &&
          saleListings.length > 0 &&
          saleListings.map((listing) => (
            <SwiperSlide key={listing._id || 1} >
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-gray-200'>Recent offers</h2>
              <Link className='text-sm text-blue-400 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-gray-200'>Recent places for rent</h2>
              <Link className='text-sm text-blue-400 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-gray-200'>Recent places for sale</h2>
              <Link className='text-sm text-blue-400 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

