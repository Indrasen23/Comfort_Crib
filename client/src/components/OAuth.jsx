import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            // console.log(result);

            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });
            const data = await res.json();
            // console.log('Response from server:', data);

            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            console.log('could not sign in with google', error);
        }
    };
    return (
        <button
            onClick={handleGoogleClick}
            type='button'
            className='bg-red-700 text-white font-bold p-3 w-[85%] mx-auto rounded-lg  hover:opacity-90 disabled:opacity-85'
        >
            CONTINUE WITH GOOGLE
        </button>
    );
}