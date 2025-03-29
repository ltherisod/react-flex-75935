// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbWsfg3ao6jEiRFRXfOhvT_9ts8Lx52jI",
  authDomain: "coder-profe-flex.firebaseapp.com",
  projectId: "coder-profe-flex",
  storageBucket: "coder-profe-flex.firebasestorage.app",
  messagingSenderId: "324971559205",
  appId: "1:324971559205:web:044492e57469a9047342cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

