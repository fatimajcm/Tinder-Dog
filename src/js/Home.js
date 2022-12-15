/* eslint-disable no-unused-vars */
import React from 'react'
import '../css/Home.css'
import videoDogs from '../dogs/dogs1.mp4'
import logoImg from '../dogs/logo.png'
import { 
    BrowserRouter as Router, 
    Routes,
    Route,
    useNavigate} from "react-router-dom";
    
import TarjetasTinder from './TarjetasTinder';
import BotonesSwipe from './BotonesSwipe';
import Header from './Header';
import Auth from '../Auth';
import { CreateAcount } from './CreateAcount';
import Login from './Login';


function Home(){


    const navigate = useNavigate();

    const handleClick = () => {
       navigate('/createAcount')
    }

    const handleClickLogin = () => {
        navigate('/login')
     }

  return (
    <div className="home">

        <video className="video" src={videoDogs} autoPlay loop muted></video>    
        
        <div className='logo'>
            <img className="logoImage" alt='' src={logoImg}></img>
        </div>   

        <div className="content">
            <h1 className='title'>TinderDog®</h1>
            <button className="signBtn" onClick={handleClickLogin}>
                Sign in
            </button>
            
            <button className="LogInBtn" onClick={handleClick}>
                Create Accout
            </button>

            
        <Routes>
            <Route path="/start" element={<><Header/><TarjetasTinder/><BotonesSwipe/></>}>
                </Route>
                <Route path="/login" element={<><Header/><Login/></>}>
                    
          </Route>
          <Route path="/createAcount" element={<CreateAcount/>}>
          </Route>
        </Routes>

        </div>
    </div>
  )
}

export default Home
