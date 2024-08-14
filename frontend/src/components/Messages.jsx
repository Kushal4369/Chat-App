import React from 'react'
import Message from './Message'
import Header from './Header'
import SendButton from './SendButton'
const Messages = () => {
  return (
    <div className='mx-3 my-3 w-[20rem] flex flex-col justify-between'>
      <div className='w-full absolute z-[12]'>
      <Header />
      </div>
      <div className='w-[97%] relative top-16 h-[26rem] overflow-auto'>
      <Message />
       <Message />
       <Message />
       <Message />
       <Message />
       <Message />
       <Message />
       <Message />
       <Message />
      </div>
      <div className='w-[20rem] absolute bottom-1 z-[12]'>
      <SendButton />
      </div>
      
       

    </div>
  )
}

export default Messages