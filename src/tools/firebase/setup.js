import firebase from 'firebase'
import 'firebase/storage'
import * as firebaseui from 'firebaseui'

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

const uiConfig = {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '/clients',
    credentialHelper: "none",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

export const startUi = (elementId) => {
    const ui = new firebaseui.auth.AuthUI(auth)
    ui.start(elementId, uiConfig)
}