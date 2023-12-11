import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBMj0kB8m7sqvXhaXQ6orFJOEiVaF2rFzw",
  authDomain: "spilt-cb2ed.firebaseapp.com",
  projectId: "spilt-cb2ed",
  storageBucket: "spilt-cb2ed.appspot.com",
  messagingSenderId: "975097172476",
  appId: "1:975097172476:web:f047e32a29284ef496a279",
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
