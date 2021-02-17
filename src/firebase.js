import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCDj9ubQelsRPOX_y33SEPgcwclHFCLkwA",
    authDomain: "jrcsifmexico-bd.firebaseapp.com",
    databaseURL: "https://jrcsifmexico-bd.firebaseio.com",
    projectId: "jrcsifmexico-bd",
    storageBucket: "jrcsifmexico-bd.appspot.com",
    messagingSenderId: "66009873940",
    appId: "1:66009873940:web:6c49da96d99bca2c307101",
    measurementId: "G-ZP6YDWXLT4"
  };

firebase.initializeApp(config)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()
