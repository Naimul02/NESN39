// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxFz8hymor4Tau7JST2f91qrYyhPWBLFg",
  authDomain: "departmental-store-bbb57.firebaseapp.com",
  projectId: "departmental-store-bbb57",
  storageBucket: "departmental-store-bbb57.appspot.com",
  messagingSenderId: "24953464719",
  appId: "1:24953464719:web:ec670716dd526ea2944dfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app