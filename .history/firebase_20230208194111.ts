import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdr8BgPsk8gN8k58LlQN6Pjruz7q_NApQ",
  authDomain: "talkie-ai-1d589.firebaseapp.com",
  projectId: "talkie-ai-1d589",
  storageBucket: "talkie-ai-1d589.appspot.com",
  messagingSenderId: "725731694564",
  appId: "1:725731694564:web:468b2cc9ceff98635dd9f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);