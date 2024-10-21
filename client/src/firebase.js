// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-de6bb.firebaseapp.com",
  projectId: "mern-estate-de6bb",
  storageBucket: "mern-estate-de6bb.appspot.com",
  messagingSenderId: "1004602496937",
  appId: "1:1004602496937:web:bd48e9976daa16c22196b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);