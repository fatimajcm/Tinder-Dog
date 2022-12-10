/* eslint-disable no-unused-vars */
/* switch is replaced with Routes*/

import './App.css';
import Header from './js/Header';
import { 
  BrowserRouter as Router, 
  Routes,
  Route,
  Link } from "react-router-dom";
import TarjetasTinder from './js/TarjetasTinder';
import BotonesSwipe from './js/BotonesSwipe';
import ListadoChats from './js/ListadoChats';
import IndividualChat from './js/IndividualChat';

// <Switch> is replaced by <Routes>

function App() {
  return (
    <div className="App">

  <Router>
        <Routes>
          
          <Route path="/chat/:user" element={<><Header backBtn="/chats"/><IndividualChat/></>}>
          </Route>

          <Route path="/chats" element={<><Header backBtn="/"/><ListadoChats/></>}>
          </Route>
          
          {/* This is the link to the Home page with path="/" */}
          <Route path="/" element={<><Header/><TarjetasTinder/><BotonesSwipe/></>}>
          </Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
