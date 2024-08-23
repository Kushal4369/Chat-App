import React, { useRef } from 'react'
import { MdArrowBack } from "react-icons/md";

const Header = ({ username }) => {

    const handleSubmit = (e) => {
        const messages = document.getElementById('messages')
        const sidebar = document.getElementById('sidebar')
        messages.style.display = 'none';
        sidebar.style.display = 'block';


    }

    return (

        <div className='flex bg-blue-900 rounded-lg justify-between'>
            <div className='flex gap-2 items-center p-2 py-1 cursor-pointer'>

                <div className=" avatar online">
                    <div className='w-12 rounded-full'>
                        <img src="https://avatar.iran.liara.run/public" alt='user avatar' />
                    </div>
                </div>

                <div className='flex gap-3 justify-end'>
                    <p className='font-bold text-gray-200'> {username} </p>

                </div>

            </div>
            <div className='text-xl my-auto pr-6'>
                <button className='text-gray-200 font-semibold' onClick={(e) => handleSubmit(e)} > <MdArrowBack /></button>
            </div>
        </div>

    )
}

export default Header