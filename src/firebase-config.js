import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import  {getFirestore} from 'firebase/firestore'
import{getStorage}from'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBMY6lN3HpzSZsgJ1RlSXS_1dGeXPGxaII",
    authDomain: "mascotagramr1.firebaseapp.com",
    databaseURL:"http://mascotagramr1.firebaseio.com",
    projectId: "mascotagramr1",
    storageBucket: "mascotagramr1.appspot.com",
    messagingSenderId: "694588520587",
    appId: "1:694588520587:web:84b8192fc46d0a5c6e7c8e"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth = getAuth(app)
export const storage=getStorage(app)
