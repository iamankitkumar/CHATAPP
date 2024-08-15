import React from 'react'
import './Chat.css'
import LeftSidebar from './../../Components/LeftSidebar/LeftSidebar';
import ChatBox from './../../Components/ChatBox/ChatBox';
import RighSidebar from './../../Components/RightSidebar/RighSidebar';
const Chat = () => {
  return (
    <div className='chat'>
        <div className="chat-container">
        <LeftSidebar/>
        <ChatBox/>
        <RighSidebar/>
        </div>
       
    </div>
  )
}

export default Chat