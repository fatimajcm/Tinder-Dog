/* eslint-disable no-unused-vars */
/* switch is replaced with Routes*/

import './App.css';
import { 
  BrowserRouter as Router, 
  Routes,
  Route,
  Link } from "react-router-dom";


import TarjetasTinder from './js/TarjetasTinder';
import BotonesSwipe from './js/BotonesSwipe';
import Header from './js/Header';
import ListadoChats from './js/ListadoChats';

import Home from './js/Home';
import { Login } from './js/Login';
import { AuthProvider } from './context/authContext';
import { CreateAcount } from './js/CreateAcount';

// <Switch> is replaced by <Routes>

function App() {
  return (

    
    <div className="App">
      <AuthProvider>
      <Router>
        <Routes>
          
          <Route path='*' element={<Home/> }></Route>

         

          <Route path="/chats" element={<><Header backBtn="/"/><ListadoChats/></>}>
          </Route>
          
          <Route path="/start" element={<><Header/><TarjetasTinder/><BotonesSwipe/></>}>
          </Route> 

          <Route path="/login" element={<Login/>}>
          </Route>

          <Route path="/createAcount" element={<CreateAcount/>}>
          </Route>

        </Routes>
      </Router>
      </AuthProvider>

  

    </div>
    


  );
}

export default App;
