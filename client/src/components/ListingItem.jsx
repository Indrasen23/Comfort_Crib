import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { FaWifi, FaBed } from 'react-icons/fa';
import PropTypes from 'prop-types';



export default function ListingItem({ listing }) {

    const openGoogleMaps = () => {
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(listing.address)}`;
        window.open(googleMapsUrl, "_blank");
    };

    return (
        <div className='bg-white shadow-md hover:shadow-lg transition-shadow  overflow-hidden rounded-lg w-full sm:w-[315px]'>
            <Link to={`/listing/${listing._id}`}>
                <img
                    src={
                        listing.imageUrls[0] ||
                        'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
                    }
                    alt='listing cover'
                    className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
                />

                <div className='p-3 flex flex-col gap-2 w-full'>
                    <p className='truncate text-lg font-semibold text-slate-700'>
                        {listing.name}
                    </p>
                    
                    <div onClick={openGoogleMaps} className='flex items-center gap-1'>
                        <MdLocationOn className='h-4 w-4 text-green-700' />
                        <p className='text-sm text-gray-600 truncate w-full hover:underline'>
                            {listing.address}
                        </p>
                    </div>

                    <p className='text-sm text-gray-600 line-clamp-2'>
                        {listing.description}
                    </p>

                    <p className='text-slate-500 mt-2 font-semibold '>
                        {`${listing.discountPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`}
                        {listing.type === 'rent' && ' / month'}
                    </p>

                    <div className='text-slate-700 flex gap-4'>
                        <div className='font-bold flex items-center text-xs gap-1'>
                            <FaBed />
                            {listing.bedrooms > 1
                                ? `${listing.bedrooms} beds `
                                : `${listing.bedrooms} bed `}
                        </div>
                        <div className='font-bold flex items-center text-xs gap-1'>
                            <FaWifi />
                            {listing.wifi
                                ? `High speed wifi`
                                : `No wifi`}
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    );
}



ListingItem.propTypes = {
    listing: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        discountPrice: PropTypes.number.isRequired,
        type: PropTypes.oneOf(['rent', 'sale']).isRequired,
        bedrooms: PropTypes.number.isRequired,
        wifi: PropTypes.bool.isRequired,
        imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};