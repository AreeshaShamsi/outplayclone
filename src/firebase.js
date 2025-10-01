// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Tumhara Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDY3rANRjq_vGhsrmghFW1d4ZDPBDebFdA",
  authDomain: "outplayclone.firebaseapp.com",
  projectId: "outplayclone",
  storageBucket: "outplayclone.appspot.com", // ✅ correct bucket
  messagingSenderId: "81894396719",
  appId: "1:81894396719:web:72fc6469a046713b86c7da",
  measurementId: "G-8CVWNZ11C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth aur Firestore export kar rahe hain
export const auth = getAuth(app);
export const db = getFirestore(app);
