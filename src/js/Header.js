/* eslint-disable no-unused-vars */
import React from 'react'
import '../css/Haeder.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import {Link, useNavigate} from 'react-router-dom';
//import {ArrowBackIosIcon} from '@material-ui/icons/ArrowBackIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

function Haeder({backBtn}) {

  //In react-router-dom v6 useHistory() is replaced by useNavigate().
  const historial = useNavigate();

  return (
    <div className="header">

    {/*If ternario sintaxis: 
      ? ( codigo si cumple condicion) : ( codigo si no cumple)

      si recibimos un backBtn hacer:
    */}
      {backBtn ? (
          //Al hacer click en la flecha la var historial regresa al path que recibe en backBtn
        <IconButton onClick={() => historial(backBtn, { replace: true })}>
        <ArrowBackIosIcon fontSize="large" className="header_backBtn" />  
        </IconButton>   

      ) : ( 
        <Link to="/user">
        <IconButton>
            <PersonIcon fontSize="large" className="header_icon"></PersonIcon>
        </IconButton>
      </Link>
      )}
    
     <Link to="/">
        <img src="https://bearable.app/wp-content/uploads/2020/11/cropped-logo.png" className="header_logo" alt="logo"></img>
    </Link>

    <Link to="/chats">
        <IconButton>
            <ForumIcon fontSize="large" className="header_icon"></ForumIcon>
        </IconButton>
    </Link>
    </div>
  )
}

export default Haeder