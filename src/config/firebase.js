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
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const githubAuthProvider = new firebase.auth.GithubAuthProvider()


export { googleAuthProvider, githubAuthProvider, app, auth, firestore, analytics }