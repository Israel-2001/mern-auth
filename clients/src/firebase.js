// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-145d0.firebaseapp.com",
  projectId: "mern-auth-145d0",
  storageBucket: "mern-auth-145d0.appspot.com",
  messagingSenderId: "1017736080250",
  appId: "1:1017736080250:web:a4a8a615ce5e4415e084c3",
  measurementId: "G-TM8FRR03L5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);