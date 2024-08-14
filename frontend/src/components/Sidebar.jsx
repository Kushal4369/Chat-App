import React from 'react'
import Searchbox from './Searchbox'
import Conversations from './Conversations'
const Sidebar = () => {
  return (
    <div>
        <Searchbox />
        <div className="divider px-3">
         
        </div>
        <Conversations/>
    </div>
  )
}

export default Sidebar