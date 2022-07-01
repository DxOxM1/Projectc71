import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDaHD-4iXcT7nXGZjwPkUHl5OiccpW0i2c",
    authDomain: "projectc71-3de6b.firebaseapp.com",
    projectId: "projectc71-3de6b",
    storageBucket: "projectc71-3de6b.appspot.com",
    messagingSenderId: "432358524193",
    appId: "1:432358524193:web:8ff5f212d7eb136566ea60"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
