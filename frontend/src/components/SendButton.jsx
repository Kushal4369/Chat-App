import React, { useRef, useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../hooks/useSendMessage';

const SendButton = () => {

  const sendMessageRef = useRef();
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;
    await sendMessage(message);
    setMessage("");
    
  }

  return (
    <form className='rounded-lg h-10 w-[90%]' onSubmit={handleSubmit}>
      <input type="text" placeholder="Type here" className="input w-full h-10" id="message"  
      onChange={(e)=>setMessage(e.target.value)} value={message}/>
      <button ><IoSend className='h-7 w-7 absolute top-2 right-[12%]'></IoSend></button>
    </form>
  )
}

export default SendButton