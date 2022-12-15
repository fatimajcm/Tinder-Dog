import React from 'react';

import '../css/ChatView.css'
import Avatar from '@material-ui/core/Avatar';


function ChatView({user,selectUser,imgPerfil}) {
 

   
  return (

    
        
    <div className="chatView" >
        <Avatar className="cvImg"  src={imgPerfil}/>
        <div className="cvDetalles" onClick={()=>selectUser(user)}>
            <h2>{user.name1}</h2>
            <div className={`user_status ${user.isOnline?"online":"offline"}`}></div>
        

    </div>
        
        
    </div>
    
  )
}

export default ChatView