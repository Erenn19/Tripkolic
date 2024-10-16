// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDXykAW3x__TVO0iNXeYCXDFw96g9He94",
  authDomain: "tripkolic-b6c5e.firebaseapp.com",
  projectId: "tripkolic-b6c5e",
  storageBucket: "tripkolic-b6c5e.appspot.com",
  messagingSenderId: "338668747073",
  appId: "1:338668747073:web:42905e93b5e7747ad109c0",
  measurementId: "G-N12ZLG9V73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);