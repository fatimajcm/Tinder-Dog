import {createContext, useContext} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const authContext = createContext()

export const useAuth = () =>{

    const context = useContext(authContext)
    return context
}

export function AuthProvider({children}){
    

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