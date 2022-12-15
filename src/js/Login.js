import { useState } from "react"
import { useAuth } from "../context/authContext";
import{signInWithEmailAndPassword}from 'firebase/auth';
import {auth,db} from '../firebase-config'
import {updateDoc,doc } from 'firebase/firestore';
import { useNavigate } from "react-router";
import '../css/login.css';



export function Login(){

    const[data, setdata] =  useState({
        email:'',
        password: '',
        error:null
    })

    const{email,password,error}=data
    
    const navigate = useNavigate()
   

    const handleChange = ({target: {name, value}}) =>{
        //console.log(name, value);
        setdata({...data, [name]: value})
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setdata({...data,error:null})
        
        try {
           const result= await signInWithEmailAndPassword(auth,email, password);
            console.log(data)
            
            await updateDoc(doc(db,'users',result.user.uid),{
                isOnline:true
            });
            setdata({name1:'',email:'',password:'',error:null});
            navigate('/start');
            
        } 
        catch (error) {
            
            alert(error.message);
        }
    }


    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="email" >Correo electronico:</label>
        <input className="field"type="email" placeholder="ingresa tu email" id="email" name="email" onChange={handleChange} />
        <label htmlFor="password" >Contraseña:</label>
        <input className="field"type="password" id="password" name="password" placeholder="ingresa tu contraseña" onChange={handleChange}/>
        { error ? <p className="error">{error}</p>:null}
        <button className="btn">Iniciar Sesion</button>
    </form>
    )

}
export default Login;