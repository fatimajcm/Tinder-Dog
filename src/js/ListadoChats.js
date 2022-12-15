/* eslint-disable no-unused-vars */


import ChatView from './ChatView';
import MessageForm from './MessageForm';
import '../css/ListadoChat.css';
import React, { useEffect, useState } from 'react';
import { orderBy,collection, query, where, onSnapshot,addDoc,Timestamp } from 'firebase/firestore';
import { auth, db ,storage} from '../firebase-config';
import {ref,getDownloadURL,uploadBytes} from 'firebase/storage'



function ListadoChats() {
  const [users, setuser] = useState([]);
  const [chat, setchat] = useState("");
  const [text,settext]=useState("");
  const[img,setimg]=useState("");
  const[msgs,setmsgs]=useState([]);

  const u1=auth.currentUser.uid
  useEffect(() => {
    const userRef = collection(db, 'users')
    const q = query(userRef, where('uid', 'not-in', [auth.currentUser.uid]))

    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = []
      querySnapshot.forEach(doc => {
        users.push(doc.data())
      });
      setuser(users)
    });
    return () => unsub();
  }, [])


  const selectUser = (user) => {
    setchat(user);
    console.log(user);
    const u2=user.id
    const id=u1>u2?`${u1+u2}`:`${u2+u1}`
    const msref=collection(db,'messages',id,'chat');

    const q=query(msref,orderBy('createAt','asc'));
    onSnapshot(q,querySnapshot=>{
      let msgs=[]
      querySnapshot.forEach(doc=>{
        msgs.push(doc.data())
      })
      setmsgs(msgs)
    })


  }
  const handlesubmit=async e=>{
    e.preventDefault();
    const u2=chat.uid
    const id=u1>u2?`${u1+u2}`:`${u2+u1}`

    let url;
    if(img){
      const imgRef=ref(storage,`image/${new Date().getTime}-${img.name}`)
      const snap=await uploadBytes(imgRef,img);
      const durl=await getDownloadURL(ref(storage,snap.ref.fullPath))
      url=durl;
    }
    await addDoc(collection(db,'messages',id,'chat'),{
      text,
      from:u1,
      to:u2,
      createdAt:Timestamp.fromDate(new Date()),
      media:url||"",

    });
    settext("");
  }
  return (

    <div className='chatcotainer'>
      <div className='users'>
        {users.map(user => <ChatView key={user.uid} user={user} selectUser={selectUser} />)}
      </div>
      <div className='messagec'>
        {chat ? (
          <>
            <div className='messageu'>
              <h3>{chat.name1}</h3>
           
              
            </div>
            <MessageForm
             handlesubmit={handlesubmit} 
             text={text} settext={settext}
             setimg={setimg}/>
           
          </>
        ) :( <h3 className='inicia'>Inicia una conersacion</h3>)}
      </div>

    </div>

  )
}

export default ListadoChats