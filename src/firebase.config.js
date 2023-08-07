// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr48i_3Zk8X7YvVBOR0S8f4QBgZbMUZqc",
  authDomain: "moyuri-akther.firebaseapp.com",
  projectId: "moyuri-akther",
  storageBucket: "moyuri-akther.appspot.com",
  messagingSenderId: "248264523667",
  appId: "1:248264523667:web:3fa928e111af1f97183266",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
