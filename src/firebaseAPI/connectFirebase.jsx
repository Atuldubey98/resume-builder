import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7922cKwAeJLnI0lI4iNCQvpBqwg6tkgI",
  authDomain: "resume-builder-721fb.firebaseapp.com",
  projectId: "resume-builder-721fb",
  storageBucket: "resume-builder-721fb.appspot.com",
  messagingSenderId: "321345615706",
  appId: "1:321345615706:web:cf6c80005fa19b3e812563",
  measurementId: "G-1NTNFQTJZH",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const connectFirebase = { auth };
export default connectFirebase;
