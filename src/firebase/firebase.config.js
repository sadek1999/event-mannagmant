// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ-eaA66Vqhzoy1muODYdwOJwmgg7dJW0",
  authDomain: "event-118e7.firebaseapp.com",
  projectId: "event-118e7",
  storageBucket: "event-118e7.appspot.com",
  messagingSenderId: "986715193323",
  appId: "1:986715193323:web:0a276f16ff32205d5ea3ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;