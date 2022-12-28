import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcEnLFCnPZYFJH5vhVxYRkmDmjqJkn_0g",
  authDomain: "musaid-a1057.firebaseapp.com",
  projectId: "musaid-a1057",
  storageBucket: "musaid-a1057.appspot.com",
  messagingSenderId: "436697646510",
  appId: "1:436697646510:web:60d50dd0772efc333e343f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
