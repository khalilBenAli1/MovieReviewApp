import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCdWCGQfH9GQR0-JcZno7HFRNVfRkl3CVg",
    authDomain: "movieapp-84541.firebaseapp.com",
    projectId: "movieapp-84541",
    storageBucket: "movieapp-84541.appspot.com",
    messagingSenderId: "1033651500453",
    appId: "1:1033651500453:web:71adfec512c41d518da44c",
    measurementId: "G-V78HXPQT1X"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });