import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCZP-LqxcTB_NRhHg9i8IWfmQu93JzK2cU",
  authDomain: "react-app-curso-df091.firebaseapp.com",
  projectId: "react-app-curso-df091",
  storageBucket: "react-app-curso-df091.appspot.com",
  messagingSenderId: "738563187740",
  appId: "1:738563187740:web:762c377ce16cbcbe82abd9"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };