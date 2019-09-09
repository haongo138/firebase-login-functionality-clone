import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0T2orI9S6naEPRbGGr8W_PKLUwO7vjSU",
  authDomain: "fir-login1-6289d.firebaseapp.com",
  databaseURL: "https://fir-login1-6289d.firebaseio.com",
  projectId: "fir-login1-6289d",
  storageBucket: "fir-login1-6289d.appspot.com",
  messagingSenderId: "623139299114",
  appId: "1:623139299114:web:dd7918618d56cc90"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);

const baseDb = myFirebase.firestore();
export const db = baseDb;