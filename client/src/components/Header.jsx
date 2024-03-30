import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-black shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-xl  sm:text-2xl flex flex-wrap'>
                        <span className="text-violet-200">Comfort</span>
                        <span className='text-violet-300'>Crib</span>
                    </h1>
                </Link>

                <form className='bg-slate-200 p-1 sm:p-2 rounded-lg flex items-center'>
                    <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <IoIosSearch className='text-2xl' />
                </form>

                <ul className='flex items-center text-white gap-4'>
                    <Link to='/'><li className='hidden sm:inline hover:text-violet-400'>Home</li></Link>
                    <Link to='/about'><li className='hidden sm:inline hover:text-violet-400'>About</li></Link>
                    <Link to='/sign-in'><li className=' sm:inline  '><button className='bg-violet-400 px-2 py-1 rounded-md text-white hover:bg-violet-700'>Sign In</button></li></Link>
                </ul>
            </div>
        </header>
    )
}

export default Header
