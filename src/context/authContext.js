import {createContext, useContext,useState,useEffect} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import{onAuthStateChanged} from 'firebase/auth'
export const authContext = createContext()

export const useAuth = () =>{

    const context = useContext(authContext)
    return context
}

 export function AuthProvider({children}){
    
    const [user,setuser]=useState(null);
    const[loading,setloading]=useState(true);

    useEffect(()=>{
        onAuthStateChanged(auth,user=>
            setuser(user),
            setloading(false))
    },[]);
    if(loading){
        return "loading.."
    }
    const signUp = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password)

    const logIn = (email, password) => 
    signInWithEmailAndPassword(auth, email, password)


    return(
        <authContext.Provider value={{ signUp, logIn}}>
            {children}
        </authContext.Provider>
    )
}