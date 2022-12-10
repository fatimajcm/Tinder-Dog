/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import '../css/IndivChat.css'

function IndividualChat() {

  const Envio = e =>{
    e.preventDefault();
    setMensajes([...mensajes,{mensaje:input}]);
    setInput("");
  }

  const [input, setInput] = useState("");
  const [mensajes, setMensajes] = useState([
      {
        nombre: "Lili",
        imagen: "",
        mensaje: "heey"
      },
      {
        nombre: "Lili",
        imagen: "",
        mensaje: "Estas ahi?? RESPONDEEE"
      },
      {
        mensaje: "Hola perdon! ya estoy"
      }
  ]);

  return (
    <div className="indvChat">
      <p className='indvChat_time'>CONSEGUISTE UN MATCH EL 19.1.22</p>
      {mensajes.map(mensaje => (

        mensaje.nombre ? (
          <div className="indvChat_mensaje">
              <Avatar className="indvChat_avatar" 
              alt = {mensaje.nombre}
              src = {mensaje.imagen} />
              <p className='indvChat_Received'>
                {mensaje.mensaje}
              </p>
          </div>
        ) : (

          <div className="indvChat_mensaje">
            <p className="indvChat_Sent">
              {mensaje.mensaje}
            </p>
          </div>
        )
        ))}

          <form className="indvChat_input">
            <input className="indvChat_inputIntput" value={input} onChange={ e => setInput(e.target.value)} placeholder="Escribe un mensaje..."/>
            <button type="submit"  onClick={Envio} className="indvChat_inputSend">Enviar</button>
          </form>


    </div>
  )
}

export default IndividualChat