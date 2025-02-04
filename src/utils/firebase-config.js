// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDirS5gVh3a9b6EOWzEZA3WvCgqeta5oz4",
  authDomain: "helphiveio.firebaseapp.com",
  projectId: "helphiveio",
  storageBucket: "helphiveio.firebasestorage.app",
  messagingSenderId: "285664143201",
  appId: "1:285664143201:web:9090787d0fc78e99800720",
  measurementId: "G-M7TD2KDTFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const databaseApp = initializeApp(firebaseConfig)
const database = getDatabase(databaseApp)

export {auth};
export default database;
