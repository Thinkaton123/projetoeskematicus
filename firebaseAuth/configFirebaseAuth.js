// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjmeW-PG1vL8pqrb85J28v6NWRhGalMyA",
  authDomain: "fir-auth-bfcfd.firebaseapp.com",
  projectId: "fir-auth-bfcfd",
  storageBucket: "fir-auth-bfcfd.firebasestorage.app",
  messagingSenderId: "61827821611",
  appId: "1:61827821611:web:30c4f2e80b90b76818fa6e",
  measurementId: "G-JFR3FBBCY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);