// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBCKkNRXJuG8AJSB8hbZ5gr1k7yggY4L9U",
    authDomain: "prepwise-b92f8.firebaseapp.com",
    projectId: "prepwise-b92f8",
    storageBucket: "prepwise-b92f8.firebasestorage.app",
    messagingSenderId: "849313606003",
    appId: "1:849313606003:web:9035d3704da87d41f8bd06",
    measurementId: "G-XTC81CB1R7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)