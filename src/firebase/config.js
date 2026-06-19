// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxpJC4NNuyFwWM7lj4LoRoFMlMzbbSXLQ",
  authDomain: "tp-react-talento-tech.firebaseapp.com",
  projectId: "tp-react-talento-tech",
  storageBucket: "tp-react-talento-tech.firebasestorage.app",
  messagingSenderId: "47324814911",
  appId: "1:47324814911:web:2677598b45ba201f49628a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//Necesario para el login
const auth = getAuth(app);

export { db, auth };
