import React from 'react'
import ChatView from './ChatView'

//var ChatView = require('./ChatView');

function ListadoChats() {
  return (
    <div className='chatsList'>
        <ChatView
            nombre= "Maria"
            mensaje= "Hola como estas?"
            time="Hace 1min"
            imgPerfil="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"
        />
        <ChatView
            nombre= "Obed"
            mensaje= "Me interesa tu perfil"
            time="Hace 30min"
            imgPerfil="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"
        />
        <ChatView
            nombre= "Andrea"
            mensaje= "Cuantos años tiene tu mascota"
            time="Hace 12 hrs"
            imgPerfil="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"
        />
        <ChatView
            nombre= "Fatima"
            mensaje= "Hola soy Fatima!"
            time="Hace 6 dias"
            imgPerfil="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"
        />
        <ChatView
            nombre= "Gabriel"
            mensaje= "Hay que agendar una cita :) "
            time="Hace 1 sem"
            imgPerfil="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"
        />
        <ChatView
            nombre= "Diego"
            mensaje= "Hola como estas?"
            time="Hace 2 sem"
            imgPerfil="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"
        />
    </div>
  )
}

export default ListadoChats