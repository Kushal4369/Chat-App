import React from 'react'
import { FaSearch } from "react-icons/fa";
const Searchbox = () => {
  return (

        <form className='flex items-center gap-2'>
          <input type='text' placeholder='Search...' className='input input-bordered rounded-badge bg-gray-700 text-white '/>
          <button className='btn btn-circle bg-blue-500 hover:bg-blue-800 border-none'>
          <FaSearch className='text-white' />
          </button>
            
        </form>

  )
}

export default Searchbox