import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDtcmclNgJi09LdzuDT5X3Cucaf4YLg5ik",
    authDomain: "fire-chat-c4778.firebaseapp.com",
    projectId: "fire-chat-c4778",
    storageBucket: "fire-chat-c4778.appspot.com",
    messagingSenderId: "238489637223",
    appId: "1:238489637223:web:b5efa3a7b201db2a705fc2",
    measurementId: "G-YKL88BX2Z7"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore()
const auth = app.auth()

const TimeStamp = firebase.firestore.FieldValue.serverTimestamp()

const googleProvider = new firebase.auth.GoogleAuthProvider()
const githubProvider = new firebase.auth.GithubAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()


export { app, firestore, auth, googleProvider, githubProvider, facebookProvider, TimeStamp }