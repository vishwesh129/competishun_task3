// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI24IXChr58V9Qh8CFZOh9dgiRPiHMN4s",
  authDomain: "foodlist-7312b.firebaseapp.com",
  projectId: "foodlist-7312b",
  storageBucket: "foodlist-7312b.appspot.com",
  messagingSenderId: "983220762187",
  appId: "1:983220762187:web:94f30dc6eb221c61a9ffce",
  measurementId: "G-LTNQ7FCJTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}