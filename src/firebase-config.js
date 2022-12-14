import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const  firebaseConfig = {
    apiKey: "AIzaSyCO96QjKaiwSEqfhFPJQFpafNct5yesjgU",
    authDomain: "tinderdog-8a371.firebaseapp.com",
    projectId: "tinderdog-8a371",
    storageBucket: "tinderdog-8a371.appspot.com",
    messagingSenderId: "334102229264",
    appId: "1:334102229264:web:ce7f9c6d69fba9e659b595",
    measurementId: "G-RXFCNRDZWF"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
