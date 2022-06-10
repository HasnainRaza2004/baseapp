// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4xYicK0SGwVVoSgRlFNJKNMK46v-YsIE",
  authDomain: "baseproject-d2368.firebaseapp.com",
  projectId: "baseproject-d2368",
  storageBucket: "baseproject-d2368.appspot.com",
  messagingSenderId: "634691908672",
  appId: "1:634691908672:web:1a043ab9aa19270249dba5",
  measurementId: "G-J66BQQE8PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;