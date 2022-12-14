import { useState } from "react"
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router";

export function Login(){

    const[user, setUser] =  useState({
        email:'',
        password: ''
    })

    const { logIn } = useAuth()
    const navigate = useNavigate()
    const [error, seterror] = useState();

    const handleChange = ({target: {name, value}}) =>{
        //console.log(name, value);
        setUser({...user, [name]: value})
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await logIn(user.email, user.password);
            navigate('/start');
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
                <button>Iniciar Sesion</button>
            </form>
        </div>
    )

}