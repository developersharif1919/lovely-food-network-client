// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjXp5maTLkSTFwqpY0OVHXPVLceVhWuyM",
  authDomain: "lovely-food-network.firebaseapp.com",
  projectId: "lovely-food-network",
  storageBucket: "lovely-food-network.appspot.com",
  messagingSenderId: "478004362514",
  appId: "1:478004362514:web:ecf0dceec7ff6e920307cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;