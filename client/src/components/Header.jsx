import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Header = () => {

    const { currentUser } = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };


    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, []);


    return (
        <header className='bg-black   shadow-sm  shadow-slate-400'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-xl  sm:text-2xl flex flex-wrap hover:opacity-80'>
                        <span className="text-violet-200">Comfort</span>
                        <span className='text-violet-300'>Crib</span>
                    </h1>
                </Link>

                <form onSubmit={handleSubmit} className='bg-slate-200 p-1 sm:p-2 rounded-lg flex items-center'>
                    <input type='text' placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <button><IoIosSearch className='text-2xl cursor-pointer' /></button>
                </form>

                <ul className='flex items-center text-white gap-4'>
                    <Link to='/'><li className='hidden sm:inline hover:text-violet-400'>Home</li></Link>
                    <Link to='/about'><li className='hidden sm:inline hover:text-violet-400'>About</li></Link>

                    <Link to='/profile'>
                        {currentUser ? (
                            <img className='rounded-full h-7 w-7 object-cover cursor-pointer' src={currentUser.avatar} alt='profile' />
                        ) : (
                                <li className=' sm:inline  '><button className='bg-violet-400 px-2 py-1 rounded-md text-white hover:bg-violet-700'>Sign In</button></li>
                        )}
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header
