import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCuAfBAiSuXfVpvf1nSW8aZ_S04KdAxF0M",
    authDomain: "harshit-amaz.firebaseapp.com",
    databaseURL: "https://harshit-amaz.firebaseio.com",
    projectId: "harshit-amaz",
    storageBucket: "harshit-amaz.appspot.com",
    messagingSenderId: "538847312999",
    appId: "1:538847312999:web:794fd762404c3b9cfaa8c2",
    measurementId: "G-RTPS9BL2FX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()
  const auth  = firebase.auth()

  export {db , auth } ;