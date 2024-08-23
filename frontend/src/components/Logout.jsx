import React from 'react'
import { IoMdLogOut } from "react-icons/io";
import useLogout from '../hooks/useLogout';

const Logout = () => {

    const {loading, logout} = useLogout();
  return (
    <div className='flex text-white font-bold gap-2 cursor-pointer' onClick={logout}>
        <IoMdLogOut  className='h-6 w-6  bg-cyan-600 rounded-xl' />
        <p>Logout</p>
    </div>
  )
}

export default Logout