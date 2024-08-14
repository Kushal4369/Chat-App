import React from 'react'
import Sidebar from '../../components/Sidebar'
import Conversations from '../../components/Conversations'
import Messages from '../../components/Messages'
const Home = () => {
  return (
    <>
      
      <div className=" flex p-6 w-[80vh] bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 my-20 h-f">
        <div className='flex'>
        <Sidebar />
        <Messages />
        </div>
        
      </div>
    </>
  )
}

export default Home