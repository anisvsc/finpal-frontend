// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5dhALO3ohbGSZ9iIPDpDHv-YgJ0-uHlM",
  authDomain: "finpal-0518ak.firebaseapp.com",
  databaseURL: "https://finpal-0518ak-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "finpal-0518ak",
  storageBucket: "finpal-0518ak.firebasestorage.app",
  messagingSenderId: "428893057633",
  appId: "1:428893057633:web:2f8628963b4f28c35b7020",
  measurementId: "G-M8ZBMW33ZE"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;
