import { React,  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();  // prevent refresh of the page 
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });


      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }

      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='bg-zinc-800   mx-auto  w-[400px] md:w-[600px] border border-gray-400 my-8 pb-8 rounded-lg shadow-sm'>

      <h1 className='text-white text-3xl text-center font-semibold my-7'>Sign Up</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-6 '>
        <input type='text' placeholder='Indrasen' id='username' onChange={handleChange} autoComplete='current-username' className='border bg-white p-3 rounded-lg w-[85%] mx-auto' />
        <input type='email' placeholder='indrasen@gmail.com' id='email' onChange={handleChange} autoComplete='current-email' className='border bg-white p-3 rounded-lg w-[85%] mx-auto' />
        <input type='password' placeholder='*****' id='password' onChange={handleChange} autoComplete='current-password' className='border bg-white p-3 rounded-lg w-[85%] mx-auto' />
        <button disabled={loading} className='bg-violet-500 text-white font-bold p-3 w-[85%] mx-auto rounded-lg uppercase hover:opacity-90 disabled:opacity-85'>{loading ? 'Loading...' : 'Sign Up'}</button>
      </form>

      <div className=' pl-11 my-[15px] flex gap-3'>
        <p className='text-white'>Have an account?</p>
        <Link to="/sign-in">
          <span className='text-violet-200 hover:underline '>Sign In</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default SignUp

