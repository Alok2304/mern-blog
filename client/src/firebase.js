// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-23c47.firebaseapp.com",
  projectId: "mern-blog-23c47",
  storageBucket: "mern-blog-23c47.appspot.com",
  messagingSenderId: "1011096160567",
  appId: "1:1011096160567:web:5547e3ac76f7a9912832b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
