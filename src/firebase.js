// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDaeAZtxRD9hrHEvq5c4SGQCr2YSYhF2rI",
    authDomain: "linkedin-clone-yt-c71dc.firebaseapp.com",
    projectId: "linkedin-clone-yt-c71dc",
    storageBucket: "linkedin-clone-yt-c71dc.appspot.com",
    messagingSenderId: "797747922775",
    appId: "1:797747922775:web:41ed4421417b8a7871a012",
    measurementId: "G-W17661Z0S4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };