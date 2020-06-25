import * as firebase from 'firebase';
import 'firebase/firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC4pNLUoUCqYkedTLO0nGfoOsvwhDvtUCI",
    authDomain: "shop-ca648.firebaseapp.com",
    databaseURL: "https://shop-ca648.firebaseio.com",
    projectId: "shop-ca648",
    storageBucket: "shop-ca648.appspot.com",
    messagingSenderId: "1030067109708",
    appId: "1:1030067109708:web:7840c32d53f6f4ba6a19e9",
    measurementId: "G-760KY3GMZ2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
