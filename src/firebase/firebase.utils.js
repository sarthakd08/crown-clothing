import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuHgmgNM5m4VRt43pbdIFF9xRW6x7e24o",
    authDomain: "crown-db-fb59c.firebaseapp.com",
    databaseURL: "https://crown-db-fb59c.firebaseio.com",
    projectId: "crown-db-fb59c",
    storageBucket: "crown-db-fb59c.appspot.com",
    messagingSenderId: "500964292161",
    appId: "1:500964292161:web:12a5e155990c4a8e3438c0",
    measurementId: "G-H4F3SZB1HD"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth; 
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch(error) {
            console.log('Error creating user', error);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
