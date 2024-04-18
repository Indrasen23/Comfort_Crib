import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable,} from 'firebase/storage';
import { app } from '../firebase';
import {
    updateUserStart, updateUserSuccess, updateUserFailure,
    deleteUserFailure, deleteUserStart, deleteUserSuccess,
    signOutUserFailure, signOutUserSuccess, signOutUserStart,} from '../redux/user/userSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Profile = () => {

    const fileRef = useRef(null);
    const { currentUser, loading, error } = useSelector((state) => state.user);
    const [file, setFile] = useState(undefined);
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const [formData, setFormData] = useState({});
    // console.log(formData)
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [showListingsError, setShowListingsError] = useState(false);
    const [userListings, setUserListings] = useState([]);
    const dispatch = useDispatch();

    // firebase storage
    // allow read;
    // allow write: if
    // request.resource.size < 2 * 1024 * 1024 &&
    // request.resource.contentType.matches('image/.*')

    useEffect(() => {
        const handleFileUpload = (file) => {
            const storage = getStorage(app);
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setFilePerc(Math.round(progress));
                },
                () => {
                    setFileUploadError(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setFormData((prevFormData) => ({ ...prevFormData, avatar: downloadURL }));
                    });
                }
            );
        };

        if (file) {
            handleFileUpload(file);
        }
    }, [file]);


    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(updateUserStart());
            const res = await fetch(`/api/user/update/${currentUser._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(updateUserFailure(data.message));
                return;
            }

            dispatch(updateUserSuccess(data));
            setUpdateSuccess(true);
        } catch (error) {
            dispatch(updateUserFailure(error.message));
        }
    };

    const handleDeleteUser = async () => {
        try {
            dispatch(deleteUserStart());
            const res = await fetch(`/api/user/delete/${currentUser._id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(deleteUserFailure(data.message));
                return;
            }
            dispatch(deleteUserSuccess(data));
        } catch (error) {
            dispatch(deleteUserFailure(error.message));
        }
    };

    const handleSignOut = async () => {

        try {
            dispatch(signOutUserStart());
            const res = await fetch('/api/auth/signout');
            const data = await res.json();
            if (data.success === false) {
                dispatch(signOutUserFailure(data.message));
                return;
            }
            dispatch(signOutUserSuccess(data));
        } catch (error) {
            dispatch(signOutUserFailure(error.message));
        }
    };

    const handleShowListings = async () => {
        try {
            setShowListingsError(false);
            const res = await fetch(`/api/user/listings/${currentUser._id}`);
            const data = await res.json();
            if (data.success === false) {
                setShowListingsError(true);
                return;
            }

            setUserListings(data);
        } catch (error) {
            setShowListingsError(true);
        }
    };


    const handleListingDelete = async (listingId) => {
        try {
            const res = await fetch(`/api/listing/delete/${listingId}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success === false) {
                console.log(data.message);
                return;
            }

            setUserListings((prev) =>
                prev.filter((listing) => listing._id !== listingId)
            );
        } catch (error) {
            console.log(error.message);
        }
    };


    return (
        <div className=''>
            <div className='bg-zinc-800   mx-auto  w-[400px] md:w-[600px] border border-gray-400 my-8 pb-8 rounded-lg shadow-sm'>
            <h1 className='text-3xl font-semibold text-center my-7 text-white'>Profile</h1>
            <form onSubmit={handleSubmit} className='mx-auto flex flex-col gap-4 max-w-[85%]'>

                <input onChange={(e) => setFile(e.target.files[0])} type='file' ref={fileRef} hidden accept='image/*' />
                <img onClick={() => fileRef.current.click()} src={formData.avatar || currentUser.avatar} alt='profile'
                    className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />

                <p className='text-sm self-center'>
                    {fileUploadError ? (
                        <span className='text-red-700'>
                            Error Image upload (image must be less than 2 mb)
                        </span>
                    ) : filePerc > 0 && filePerc < 100 ? (
                        <span className='text-green-500'>{`Uploading ${filePerc}%`}</span>
                    ) : filePerc === 100 ? (
                        <span className='text-green-700'>Image successfully uploaded!</span>
                    ) : (
                        ''
                    )}
                </p>
                <input type="text" placeholder='username' defaultValue={currentUser.username} id='username' className='border p-3 rounded-lg' onChange={handleChange} />
                <input type="email" placeholder='email' defaultValue={currentUser.email} id='email' className='border p-3 rounded-lg' onChange={handleChange} />
                <input type="password" placeholder='password' id='password' className='border p-3 rounded-lg' onChange={handleChange} />
                <button disabled={loading} className='bg-violet-500 text-white rounded-lg p-3 uppercase font-bold hover:opacity-90 disabled:opacity-75'> {loading ? 'Loading...' : 'Update'} </button>
                <Link className='bg-green-700 font-bold text-white p-3 rounded-lg uppercase text-center hover:opacity-85' to={"/create-listing"}>
                    Create Listing
                </Link>
            </form>
            <div className="flex justify-between mt-5 max-w-[85%] mx-auto">
                <span onClick={handleDeleteUser} className='text-red-700 cursor-pointer hover:text-red-400'>  Delete account </span>
                <span onClick={handleSignOut} className='text-red-700 cursor-pointer hover:text-red-400'>Sign out</span>
            </div>

            <p className='text-red-700 mt-5'>{error ? error : ''}</p>
            <p className='text-green-700 mt-5'>
                {updateSuccess ? 'User is updated successfully!' : ''}
            </p>

            </div>



            <button onClick={handleShowListings} className='hover:text-green-400   text-green-700 w-full '>
                Show Listings
            </button>
            <p className='text-red-700 mt-5'>
                {showListingsError ? 'Error showing listings' : ''}
            </p>


            {userListings && userListings.length > 0 &&
                // if these two conditions are true then show the listing
                <div className="flex flex-col gap-4 max-w-[800px] w-[80%] mx-auto pb-10">
                    <h1 className='text-center mt-7 text-2xl font-semibold text-white'>Your Listings</h1>
                    {userListings.map((listing) => (
                        <div
                            key={listing._id}
                            className='border rounded-lg p-3 flex justify-between items-center gap-4 '
                        >
                            <Link to={`/listing/${listing._id}`}>
                                <img
                                    src={listing.imageUrls[0]}
                                    alt='listing cover'
                                    className='h-16 w-16 object-contain'
                                />
                            </Link>
                            <Link
                                className='text-gray-200   font-semibold  hover:underline truncate flex-1'
                                to={`/listing/${listing._id}`}
                            >
                                <p>{listing.name}</p>
                            </Link>

                            <div className='flex flex-col item-center'>
                                <button onClick={() => handleListingDelete(listing._id)} className='text-red-700 uppercase hover:underline'>Delete</button>
                                <Link to={`/update-listing/${listing._id}`}><button className='text-green-700 uppercase hover:underline'>Edit</button></Link>
                                
                            </div>
                        </div>
                    ))}
                </div>}
        </div>
    )
}

export default Profile
