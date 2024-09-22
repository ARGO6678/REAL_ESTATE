// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-82a5d.firebaseapp.com",
  projectId: "real-estate-82a5d",
  storageBucket: "real-estate-82a5d.appspot.com",
  messagingSenderId: "514306418136",
  appId: "1:514306418136:web:f6a121b9359dde18563ead"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);