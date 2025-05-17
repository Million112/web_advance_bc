// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaqiyC6yZNZlKVpXvSy1MBUnX8MvyDqCs",
  authDomain: "web-advance-book-store.firebaseapp.com",
  projectId: "web-advance-book-store",
  storageBucket: "web-advance-book-store.firebasestorage.app",
  messagingSenderId: "876255698331",
  appId: "1:876255698331:web:ed2d66367210e222f6d53e",
  measurementId: "G-46Y6RYFM2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);