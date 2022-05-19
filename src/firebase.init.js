// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfMjOZnV1tsSIpGHLTOlXB_q3RukixfLc",
  authDomain: "assignment-to-do-app.firebaseapp.com",
  projectId: "assignment-to-do-app",
  storageBucket: "assignment-to-do-app.appspot.com",
  messagingSenderId: "374803201231",
  appId: "1:374803201231:web:c2412688132f8139430bba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth