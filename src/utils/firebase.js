// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjPykzDL0WU6dX4RWEPEVhLDv6cuZRSf4",
  authDomain: "netflixgpt-9541.firebaseapp.com",
  projectId: "netflixgpt-9541",
  storageBucket: "netflixgpt-9541.appspot.com",
  messagingSenderId: "1040669387757",
  appId: "1:1040669387757:web:484ba4376ae681ec2715e4",
  measurementId: "G-0BSMBR9K0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
