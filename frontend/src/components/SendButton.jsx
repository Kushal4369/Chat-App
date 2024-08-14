import React from 'react'
import { IoSend } from "react-icons/io5";

const SendButton = () => {
  return (
    <div className='rounded-lg h-10 w-[19rem] flex items-around'>
      <div className='w-4/5'>
        <input type="text" placeholder="Type here" className="input w-[19rem] h-10" />
      </div>
      <div className='w-1/5 pl-6 pt-2'>
        <button className=''><IoSend className='h-7 w-7'></IoSend></button>
      </div>

    </div>
  )
}

export default SendButton