// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOoadjAjpYNGxpIHNnZQNN2gjyTfip5nY",
  authDomain: "netflixgpt-ad684.firebaseapp.com",
  projectId: "netflixgpt-ad684",
  storageBucket: "netflixgpt-ad684.appspot.com",
  messagingSenderId: "775924117044",
  appId: "1:775924117044:web:bee290f3680e22761ce461",
  measurementId: "G-42TX7PKJ2X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
