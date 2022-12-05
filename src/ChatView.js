import React from 'react'
import './ChatView.css'
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

function ChatView({nombre,mensaje,time,imgPerfil}) {
  return (
    
    <Link to={`/chat/${nombre}`}>
        {/* La linea anterior sirve para hacer un link dinamico 
        al hacer click sobre el usuario */}
    <div className="chatView">
        <Avatar className="cvImg" alt={nombre} src={imgPerfil}/>
        <div className="cvDetalles">
            <h2>{nombre}</h2>
            <p>{mensaje}</p>
        </div>
        <p className="cvTime">{time}</p>
    </div>
    </Link>
  )
}

export default ChatView