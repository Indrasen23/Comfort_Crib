import React from 'react';

export default function CreateListing() {
    return (
        <main className=' max-w-4xl bg-zinc-800  text-gray-200 mx-auto md:border md:border-gray-400 md:rounded-lg my-10 p-4 '>
            <h1 className='text-4xl  font-bold  text-center my-7'>
                Create a Listing
            </h1>
            <form className=' flex flex-col sm:flex-row gap-4'>
                <div className='flex flex-col gap-4 flex-1'>
                    <input
                        type='text'
                        placeholder='Name'
                        className='text-black border p-3 rounded-lg'
                        id='name'
                        maxLength='62'
                        minLength='5'
                        required
                    />
                    <textarea
                        type='text'
                        placeholder='Description'
                        className='text-black border p-3 rounded-lg'
                        id='description'
                        required
                    />
                    <input
                        type='text'
                        placeholder='Address'
                        className='border p-3 rounded-lg text-black'
                        id='address'
                        required
                    />
                    <div className='flex gap-6 flex-wrap'>
                        <div className='flex gap-2'>
                            <input type='checkbox' id='sale' className='w-5' />
                            <span>Sell</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' id='rent' className='w-5' />
                            <span>Rent</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' id='parking' className='w-5' />
                            <span>Parking spot</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' id='furnished' className='w-5' />
                            <span>Furnished</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' id='wifi' className='w-5' />
                            <span>Wifi</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' id='CCTV ' className='w-5' />
                            <span>CCTV </span>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' id='Geyser ' className='w-5' />
                            <span>Geyser </span>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' id='offer ' className='w-5' />
                            <span>Private Bathroom </span>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-6 '>
                        <div className='flex items-center gap-2'>
                            <input
                                type='number'
                                id='bedrooms'
                                min='1'
                                max='10'
                                required
                                className='p-3 border text-black border-gray-300 rounded-lg'
                            />
                            <p>Beds</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input
                                type='number'
                                id='regularPrice'
                                min='1'
                                max='10'
                                required
                                className='p-3 border text-black border-gray-300 rounded-lg'
                            />
                            <div className='flex flex-col items-center'>
                                <p>Regular price</p>
                                <span className='text-xs'>(Rs. / month)</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input
                                type='number'
                                id='discountPrice'
                                min='1'
                                max='10'
                                required
                                className='p-3 border text-black border-gray-300 rounded-lg'
                            />
                            <div className='flex flex-col items-center'>
                                <p>Discounted price</p>
                                <span className='text-xs'>(Rs. / month)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-6">
                    <p className='font-semibold text-red-500 '>Images:
                        <span className='font-normal text-gray-100 ml-2'>The first image will be the cover <span className='text-red-400'>(max 6)</span></span>
                    </p>
                    <div className="flex gap-4">
                        <input className='p-3 border border-gray-300 rounded w-full ' type="file" id='images' accept='image/*' multiple />
                        <button className='p-3 text-violet-400 border border-violet-500 rounded uppercase hover:bg-violet-900   disabled:opacity-80'>Upload</button>
                    </div>
                    <button className='p-3 bg-green-700 text-white rounded-lg uppercase hover:opacity-85 disabled:opacity-80'>Create Listing</button>
                </div>
            </form>
        </main>
    );
}