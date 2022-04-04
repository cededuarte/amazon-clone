import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3zQmDK7LhYKMmNkAo493rm4As-8f5p8s",
    authDomain: "clone2-4b964.firebaseapp.com",
    projectId: "clone2-4b964",
    storageBucket: "clone2-4b964.appspot.com",
    messagingSenderId: "117361048164",
    appId: "1:117361048164:web:280d216f54ccf385887d71",
    measurementId: "G-66EWC54RHC"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
var provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }