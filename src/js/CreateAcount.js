import { useState } from "react";
import{createUserWithEmailAndPassword}from 'firebase/auth';
import {auth,db} from '../firebase-config'

import {setDoc,doc,Timestamp } from 'firebase/firestore';
import { useNavigate } from "react-router";
import '../css/createaccount.css';


export function CreateAcount(){

    const[data, setdata] =  useState({
        name1:"",
        email:'',
        password: '',
        error:null
    })

    const{name1,email,password,error}=data
    
    const navigate = useNavigate()
   

    const handleChange = ({target: {name, value}}) =>{
        //console.log(name, value);
        setdata({...data, [name]: value})
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setdata({...data,error:null})
        if( !name1||!email||!password ){
            setdata({...data,error:'Todos los campos requeridos'})
        }
        try {
           const result= await createUserWithEmailAndPassword(auth,email, password);
            console.log(data)
            
            await setDoc(doc(db,'users',result.user.uid),{
                uid:result.user.uid,
                name1,
                email,
                password,
                createAt:Timestamp.fromDate(new Date()),
                isOnline:true
            });
            setdata({name1:'',email:'',password:'',error:null});
            navigate('/Home');
            
        } 
        catch (error) {
            
            alert(error.message);
        }
    }


    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="email" >Nombre:</label>
        <input className="field" type="text" placeholder="ingresa tu nombre" id="name" name="name1" onChange={handleChange} />
        <label htmlFor="email" >Correo electronico:</label>
        <input className="field"type="email" placeholder="ingresa tu email" id="email" name="email" onChange={handleChange} />
        <label htmlFor="password" >Contraseña:</label>
        <input className="field"type="password" id="password" name="password" placeholder="ingresa tu contraseña" onChange={handleChange}/>
        { error ? <p className="error">{error}</p>:null}
        <button className="btn">Crear cuenta</button>
    </form>
    )

}