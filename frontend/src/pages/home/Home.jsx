import React from 'react'
import Sidebar from '../../components/Sidebar'
import Conversations from '../../components/Conversations'
import Messages from '../../components/Messages'
import Logout from '../../components/Logout'
import NoConversation from '../../components/NoConversation'

import useConversation from '../../zustand/useConversation'
const Home = () => {

  const {selectedConversation} = useConversation();
  
  
  // const messages =useGetMessages();

  return (
    <>
      
      <div className=" flex justify-center p-6 w-full bg-blue-300 rounded-md backdrop-blur-sm bg-opacity-30 mx-auto gap-2 ">
        
        <Sidebar />
        {selectedConversation? <Messages username={selectedConversation.username} /> :""}

        
      </div>
      
    </>
  )
}

export default Home