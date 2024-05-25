import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBj_jeYSmCwLuhxGQ3C8B3jmCbxQUO_2Xs",
    authDomain: "fir-7d0a1.firebaseapp.com",
    projectId: "fir-7d0a1",
    storageBucket: "fir-7d0a1.appspot.com",
    messagingSenderId: "646788406513",
    appId: "1:646788406513:web:26363d02ebf7a13de4dd50",
    measurementId: "G-GHE9CC4SQR"
  };

  export const Firebase = firebase.initializeApp(firebaseConfig)