// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfLQqZywuTKA2Tgx3EZExRQshm29bYZHg",
  authDomain: "warehouse-management-b22f6.firebaseapp.com",
  projectId: "warehouse-management-b22f6",
  storageBucket: "warehouse-management-b22f6.appspot.com",
  messagingSenderId: "853983191069",
  appId: "1:853983191069:web:c0c2f8e5610067e89b66f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;