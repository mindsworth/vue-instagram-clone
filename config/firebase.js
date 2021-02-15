import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZQOSNA_vCDtEuDIqQ0krqE-Wy_unAYac",
  authDomain: "next-instagram-clone.firebaseapp.com",
  databaseURL: "https://next-instagram-clone-default-rtdb.firebaseio.com",
  projectId: "next-instagram-clone",
  storageBucket: "next-instagram-clone.appspot.com",
  messagingSenderId: "725270791804",
  appId: "1:725270791804:web:79a47a7b77170883a4ebf9",
  measurementId: "G-RVR870VKZD",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
