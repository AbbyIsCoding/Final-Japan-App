// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7NgHajkMr3uGppv0bvQIdjIYsbsNQpFQ",
  authDomain: "final-draft-43fb3.firebaseapp.com",
  projectId: "final-draft-43fb3",
  storageBucket: "final-draft-43fb3.appspot.com",
  messagingSenderId: "284517804580",
  appId: "1:284517804580:web:08c5cc2f74b98c444c46b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// adding database 
export const database = getFirestore(app); 
