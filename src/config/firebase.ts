// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA55_PDCPXtYWAaZ7evw9THaIQzhYxVYXE",
    authDomain: "adventour-mern.firebaseapp.com",
    projectId: "adventour-mern",
    storageBucket: "adventour-mern.appspot.com",
    messagingSenderId: "362560836161",
    appId: "1:362560836161:web:5e6c795d7b194aa0056cc0",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
