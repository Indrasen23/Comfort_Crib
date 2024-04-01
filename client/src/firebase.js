// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "comfortcrib-de861.firebaseapp.com",
    projectId: "comfortcrib-de861",
    storageBucket: "comfortcrib-de861.appspot.com",
    messagingSenderId: "228263154471",
    appId: "1:228263154471:web:c255db5573445896178f02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);