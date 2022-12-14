import { useState } from "react"
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router";

export function CreateAcount(){

    const[user, setUser] =  useState({
        email:'',
        password: ''
    })

    const {signUp} = useAuth()
    const navigate = useNavigate()
    const [error, seterror] = useState();

    const handleChange = ({target: {name, value}}) =>{
        //console.log(name, value);
        setUser({...user, [name]: value})
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await signUp(user.email, user.password);
            alert("Cuenta creada");
            navigate('/login');
        } catch (error) {
            seterror(error.message);
            alert(error.message);
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" >Correo electronico:</label>
                <input type="email" placeholder="ingresa tu email" id="email" name="email" onChange={handleChange} />
                <label htmlFor="password" >Contraseña:</label>
                <input type="password" id="password" name="password" placeholder="ingresa tu contraseña" onChange={handleChange}/>
                <button>Crear Cuenta</button>
            </form>
        </div>
    )

}