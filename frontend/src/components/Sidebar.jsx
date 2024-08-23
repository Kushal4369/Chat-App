import React from 'react'
import Searchbox from './Searchbox'
import Conversations from './Conversations'
import Logout from './Logout'
const Sidebar = () => {

const handleSubmit = (e)=>{
  const messages = document.getElementById('messages')
  const sidebar = document.getElementById('sidebar')
  sidebar.style.display = 'none';
  if(messages){
    messages.style.display = 'block' ;
    
  }
    
}
  
  return (
    <div className='w-full' id='sidebar' onClick={(e)=>handleSubmit(e)}>
        <Searchbox />
        <div className="divider px-3">
         
        </div>
        <Conversations/>
        <Logout />
    </div>
  )
}

export default Sidebar