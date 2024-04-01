import React from 'react'
import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';


const Profile = () => {

    const fileRef = useRef(null);
    const { currentUser } = useSelector((state) => state.user);
    const [file, setFile] = useState(undefined);
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const [formData, setFormData] = useState({});
    // console.log(formData)

    // firebase storage
    // allow read;
    // allow write: if
    // request.resource.size < 2 * 1024 * 1024 &&
    // request.resource.contentType.matches('image/.*')

    useEffect(() => {
        if (file) {
            handleFileUpload(file);
        }
    }, [file]);

    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFilePerc(Math.round(progress));
            },
            (error) => {
                setFileUploadError(true);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
                    setFormData({ ...formData, avatar: downloadURL })
                );
            }
        );
    };

    return (
        <div className='bg-zinc-800   mx-auto  w-[400px] md:w-[600px] border border-gray-400 my-8 pb-8 rounded-lg shadow-sm'>
            <h1 className='text-3xl font-semibold text-center my-7 text-white'>Profile</h1>
            <form className='mx-auto flex flex-col gap-4 max-w-[85%]'>

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
