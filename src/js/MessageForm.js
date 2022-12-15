 
import React from 'react'
import '../css/ChatView.css';
import  Attachment  from "../svg/Attachment"; 


function MessageForm({handlesubmit,text,settext,setimg}) {
  return (
    <form className='messageform' onSubmit={handlesubmit}>
        <label htmlFor='img'>
          <Attachment/>
        </label>
        <input onchange={(e)=>setimg(e.target.files[0])}
        type='file' 
        id='img' accept='image/*' 
        style={{display:'none'}}/>
        <div>
          <input type='text' placeholder='Ingresa mensaje'value={text} onChange={e=>settext(e.target.value)}/>
        </div>
        <div>
          <button className='btn'>Enviar</button>
        </div>
    </form>
  )
}

export default MessageForm;