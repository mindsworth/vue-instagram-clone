import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZQOSNA_vCDtEuDIqQ0krqE-Wy_unAYac",
  authDomain: "next-instagram-clone.firebaseapp.com",
  databaseURL: "https://next-instagram-clone-default-rtdb.firebaseio.com",
  projectId: "next-instagram-clone",
  storageBucket: "next-instagram-clone.appspot.com",
  messagingSenderId: "725270791804",
  appId: "1:725270791804:web:79a47a7b77170883a4ebf9",
  measurementId: "G-RVR870VKZD"
});

export const db = firebaseApp.firestore();
export const authFirebase = firebaseApp.auth();
export const storage = firebaseApp.storage();
