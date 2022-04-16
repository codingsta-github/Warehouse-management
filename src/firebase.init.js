// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBER9oAn5ad1q7fM0AtdGJ57DSWSAwXOz4",
  authDomain: "guru-mann-fitness-55bf6.firebaseapp.com",
  projectId: "guru-mann-fitness-55bf6",
  storageBucket: "guru-mann-fitness-55bf6.appspot.com",
  messagingSenderId: "654577657074",
  appId: "1:654577657074:web:13512945f675fcc369dc6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;