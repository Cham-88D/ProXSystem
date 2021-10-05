import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/storage"
const app = firebase.initializeApp({
    apiKey: "AIzaSyCPOVm5_nUZnliOg6L1gLTzxAQ4A1BXlCU",
    authDomain: "procurementsystemx.firebaseapp.com",
    databaseURL: "https://procurementsystemx-default-rtdb.firebaseio.com",
    projectId: "procurementsystemx",
    storageBucket: "procurementsystemx.appspot.com",
    messagingSenderId: "1029661455593",
    appId: "1:1029661455593:web:bb7cd9d8e38c7c7afb2c78",
    measurementId: "G-S2CMFNVQQH"
})
export const auth = app.auth()
export default app
