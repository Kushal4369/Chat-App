import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import useConversation from '../zustand/useConversation';
import { extractTime } from '../../../backend/utils/extractTime';

const Message = ({ message }) => {

    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;

    const formattedTime = extractTime(message.createdAt)
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;


    return (
        // <div className='flex items-end  w-full'>
            <div className={`chat mb-3 ${chatClassName} bg-inherit mx-2`}>
                <div className="avatar online  chat-image">
                    <div className='w-12 rounded-full'>
                        <img src="https://avatar.iran.liara.run/public" alt='user avatar' />
                    </div>
                </div>

                <div className={` chat-bubble ${fromMe ? "bg-sky-500" : ""} `}>
                    <span className='message'> {message.message}</span>
                </div>
            {/* </div> */}
            <div className="chat-footer">

                <time className="text-xs opacity-50">{formattedTime}</time>
            </div>

        </div>
    )
}

export default Message