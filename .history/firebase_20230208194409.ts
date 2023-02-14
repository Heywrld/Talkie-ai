import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {}