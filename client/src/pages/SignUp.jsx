import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='bg-zinc-800   mx-auto  w-[400px] md:w-[600px] border   my-8 pb-8 rounded-lg shadow-md'>

      <h1 className='text-white text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-6 '>
        <input type='text' placeholder='Indrasen' id='username' className='border bg-white p-3 rounded-lg w-[85%] mx-auto' />
        <input type='email' placeholder='indrasen@gmail.com' id='email' className='border bg-white p-3 rounded-lg w-[85%] mx-auto' />
        <input type='password' placeholder='*****' id='username' className='border bg-white p-3 rounded-lg w-[85%] mx-auto' />
        <button className='bg-violet-500 text-white font-bold p-3 w-[85%] mx-auto rounded-lg uppercase hover:opacity-90 disabled:opacity-85'>Sign Up</button>
      </form>

      <div className=' pl-11 my-[15px] flex gap-3'>
        <p className='text-white'>Have an account?</p>
        <Link to="sign-in">
          <span className='text-violet-200 hover:underline '>Sign In</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp

