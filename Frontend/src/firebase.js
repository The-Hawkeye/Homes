// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-5ac0b.firebaseapp.com",
  projectId: "real-estate-5ac0b",
  storageBucket: "real-estate-5ac0b.appspot.com",
  messagingSenderId: "179619451741",
  appId: "1:179619451741:web:e4dd2b9a6671090596ceb4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
