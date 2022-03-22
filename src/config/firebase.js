import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
    apiKey: "AIzaSyD2IzRuTxqbL6hbzsLuCBx83jARLNu9Pus",
    authDomain: "aukcion-54f8e.firebaseapp.com",
    projectId: "aukcion-54f8e",
    storageBucket: "aukcion-54f8e.appspot.com",
    messagingSenderId: "53134732754",
    appId: "1:53134732754:web:bb92556d9026456792ac0b"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
