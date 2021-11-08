import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDIDWJmR7AccVXcvzUPLxTJnES9akSK0xA",
    authDomain: "kidftstore-db.firebaseapp.com",
    projectId: "kidftstore-db",
    storageBucket: "kidftstore-db.appspot.com",
    messagingSenderId: "201926691420",
    appId: "1:201926691420:web:e6da31770bc85da7f6b499",
    measurementId: "G-HSV0D5DYGD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set up Google authentication utilities
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); //we want to always trigger the Google pop up whenever we use Google auth provider for authentication and sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;