// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTji2BIFBq1ojc4QdZPLU81GfzsIOU5i0",
  authDomain: "clone-a50ec.firebaseapp.com",
  projectId: "clone-a50ec",
  storageBucket: "clone-a50ec.appspot.com",
  messagingSenderId: "1086788723468",
  appId: "1:1086788723468:web:057f3fb458938952451f29",
  measurementId: "G-NDQ3HBPSNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

export { auth,db };

