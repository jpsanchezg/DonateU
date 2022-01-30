
// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBs5xxm-shEQHmERVa0SdzXL9a0mHnmlSU",
    authDomain: "donateu.firebaseapp.com",
    projectId: "donateu",
    storageBucket: "donateu.appspot.com",
    messagingSenderId: "630967830388",
    appId: "1:630967830388:web:ecce49bcf81bda9d3fce21",
    measurementId: "G-Y7MQRCK78E"
};




// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();


const signInWithGoogle = async () => {


};
const registerWithEmailAndPassword = async (email, password, username, firstName, lastname) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db.collection("users").doc(user.uid).set({
            uid: user.uid,
            username,
            firstName,
            lastname
        });
    } catch (err) {
        console.error(err);
    }
};

const donateProductsxUser = async (photoURL, tittle, location, description) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db.collection("donations").doc(tittle).set({
            uid: user.uid,
            username,
            firstName,
            category,
            photoURL,
            lastname
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};






const signOutUser = async () => {
    try {
        await firebase.auth().signOut();
        console.log('User Logged Out!');

    } catch (e) {
        console.log(e);
    }
}

export {
    auth,
    db,
    signOutUser,
    signInWithGoogle,
    registerWithEmailAndPassword

};