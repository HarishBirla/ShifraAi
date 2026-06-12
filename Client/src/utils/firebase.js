import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shifraai-d2cd8.firebaseapp.com",
  projectId: "shifraai-d2cd8",
  storageBucket: "shifraai-d2cd8.firebasestorage.app",
  messagingSenderId: "755978436303",
  appId: "1:755978436303:web:60b1334d3a4e76e58ec1ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}

