import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBPQ3uSBZwEjILLBGChpzZio3BU3dxqKfk",
    authDomain: "curso-react-7f127.firebaseapp.com",
    projectId: "curso-react-7f127",
    storageBucket: "curso-react-7f127.appspot.com",
    messagingSenderId: "421221053402",
    appId: "1:421221053402:web:38a4c50a852d38b50d06e3",
    measurementId: "G-3SNG3QMYV0"
};

firebase.initializeApp(firebaseConfig)
firebase.auth = firebase.auth()
export default firebase

