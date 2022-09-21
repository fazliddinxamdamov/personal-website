// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBP9AAUsF6rA4u44KXxoU1fCCRdzz_tpJ8",
    authDomain: "my-website-6e4c7.firebaseapp.com",
    projectId: "my-website-6e4c7",
    storageBucket: "my-website-6e4c7.appspot.com",
    messagingSenderId: "1003769088198",
    appId: "1:1003769088198:web:0f35624e8e77c6baddafc7",
    measurementId: "G-1CPTYYX6KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);
