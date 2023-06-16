import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDuqWKFLHbgJzQxKiiL5CMM0Q5sSzZI7DY",
  authDomain: "todo-reg.firebaseapp.com",
  projectId: "todo-reg",
  storageBucket: "todo-reg.appspot.com",
  messagingSenderId: "690536848435",
  appId: "1:690536848435:web:58508957d8ffffe3db9746",
  measurementId: "G-FVQY5VT602"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      // const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};