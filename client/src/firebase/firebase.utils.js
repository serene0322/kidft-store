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

//allow to take specific user off object that we got back from authentication library, then store inside database
//it is async function because we are making an API request
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //if the user is not in database yet, store it into database using the data from userAuth object
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        //create new document object
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

//function to store the shop data from frontend to firestore, so we no need to type in one by one
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc(); //let firestore set the key for us
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

//convert to object instead of array
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubcribe = auth.onAuthStateChanged(userAuth => {
            unsubcribe();
            resolve(userAuth);
        }, reject);
    });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set up Google authentication utilities
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' }); //we want to always trigger the Google pop up whenever we use Google auth provider for authentication and sign in
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;