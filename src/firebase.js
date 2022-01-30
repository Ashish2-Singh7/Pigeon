import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAEcU4Jmr0laRBXQiVSjJpnKH5ePqSczCo",
    authDomain: "pigeon-2aee3.firebaseapp.com",
    projectId: "pigeon-2aee3",
    storageBucket: "pigeon-2aee3.appspot.com",
    messagingSenderId: "84330097460",
    appId: "1:84330097460:web:32ebf7eaaa8f36f913d361"
}).auth();