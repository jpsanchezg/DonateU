import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBs5xxm-shEQHmERVa0SdzXL9a0mHnmlSU",
    authDomain: "donateu.firebaseapp.com",
    projectId: "donateu",
    storageBucket: "donateu.appspot.com",
    messagingSenderId: "630967830388",
    appId: "1:630967830388:web:ecce49bcf81bda9d3fce21",
    measurementId: "G-Y7MQRCK78E"
};

initializeApp(firebaseConfig);