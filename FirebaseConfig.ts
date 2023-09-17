// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlBEbyH7a2NCOj0dBtIhxWKlb5g09eNbo",
  authDomain: "todolist-53bf0.firebaseapp.com",
  projectId: "todolist-53bf0",
  storageBucket: "todolist-53bf0.appspot.com",
  messagingSenderId: "17069792051",
  appId: "1:17069792051:web:f351004b014aa2be4f3c46",
  measurementId: "G-HFB6ZF85KS"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
