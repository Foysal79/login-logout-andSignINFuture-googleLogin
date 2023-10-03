// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxveUerbbhTkDHn2BgcAW6XKrc-UUwIwg",
  authDomain: "praivetrouter-login-logout.firebaseapp.com",
  projectId: "praivetrouter-login-logout",
  storageBucket: "praivetrouter-login-logout.appspot.com",
  messagingSenderId: "362689145509",
  appId: "1:362689145509:web:412f2cfc1b0488511c7b4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;