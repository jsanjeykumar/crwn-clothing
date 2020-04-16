import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA2IrOy-0I0yjA0OWoFVWgKfH0ocAuL7l4",
  authDomain: "crwn-clothing-ccca6.firebaseapp.com",
  databaseURL: "https://crwn-clothing-ccca6.firebaseio.com",
  projectId: "crwn-clothing-ccca6",
  storageBucket: "crwn-clothing-ccca6.appspot.com",
  messagingSenderId: "281444794839",
  appId: "1:281444794839:web:2deea4ea20b226029d0b92",
  measurementId: "G-Y7PFQGMQ3W",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
