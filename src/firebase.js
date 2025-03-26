  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyBuTXcFOYSGOeo--ehbbHdGDVTNkztA4TU",
  authDomain: "lamarinchess.firebaseapp.com",
  projectId: "lamarinchess",
  storageBucket: "lamarinchess.firebasestorage.app",
  messagingSenderId: "656332896462",
  appId: "1:656332896462:web:b6218953885a6e69eeb89f",
  measurementId: "G-RZHN58QMV3"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
