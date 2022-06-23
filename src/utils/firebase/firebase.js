import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_HxqEei0B7PXMkDKYp3VBrRpXuk3ygTY",
    authDomain: "crown-clothing-db-b6cfa.firebaseapp.com",
    projectId: "crown-clothing-db-b6cfa",
    storageBucket: "crown-clothing-db-b6cfa.appspot.com",
    messagingSenderId: "171138873099",
    appId: "1:171138873099:web:21cb3041df20883762940e",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;

};
