import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyC8pLxpTYflBiwSjfEweUO0atfyUV6FVWE",
authDomain: "clone-43016.firebaseapp.com",
projectId: "clone-43016",
storageBucket: "clone-43016.appspot.com",
messagingSenderId: "546585125482",
appId: "1:546585125482:web:d19a8bf5d5569873832013",
measurementId: "G-D9GZYTTRXN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export { db }
