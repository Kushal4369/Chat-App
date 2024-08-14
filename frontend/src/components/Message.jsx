import React from 'react'

const Message = () => {
    return (
        <div className='flex items-end justify-around w-full'>
            <div className=" avatar online mb-5">
                    <div className='w-12 rounded-full'>
                        <img src="https://avatar.iran.liara.run/public" alt='user avatar' />
                    </div>
                    </div>
            <div className="chat chat-start mb-3">
                <div className="chat-bubble">
                    It's over Anakin,
                    
                    I have the high ground.
                </div>
            </div>
            
        </div>
    )
}

export default Message