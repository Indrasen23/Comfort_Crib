import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

    const { currentUser } = useSelector((state) => state.user)

    return (
        <div className='bg-zinc-800   mx-auto  w-[400px] md:w-[600px] border border-gray-400 my-8 pb-8 rounded-lg shadow-sm'>
            <h1 className='text-3xl font-semibold text-center my-7 text-white'>Profile</h1>
            <form className='mx-auto flex flex-col gap-4 max-w-[85%]'>
                <img src={currentUser.avatar} alt="profile" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center  mb-2' />
                <input type="text" placeholder='username' id='username' className='border p-3 rounded-lg' />
                <input type="email" placeholder='email' id='email' className='border p-3 rounded-lg' />
                <input type="text" placeholder='password' id='password' className='border p-3 rounded-lg' />
                <button className='bg-violet-500 text-white rounded-lg p-3 uppercase font-bold hover:opacity-90 disabled:opacity-75'>update</button>

            </form>
            <div className="flex justify-between mt-5 max-w-[85%] mx-auto">
                <span className='text-red-700 cursor-pointer hover:text-red-400'>Delete account</span>
                <span className='text-red-700 cursor-pointer hover:text-red-400'>Sign out</span>
            </div>
        </div>
    )
}

export default Profile
