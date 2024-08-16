import React from 'react';
import './ChatBox.css';
import assets from '../../assets/assets';

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-header">
        <img src={assets.profile_img} alt="Profile" className="profile-img" />
        <p className="user-name">
          Ankit
          <img className='dot' src={assets.green_dot} alt="Online Status" />
        </p>
        <img src={assets.help_icon} className='help-icon' alt="Help" />
      </div>
      <div className="chat-msg">
        {/* Chat messages will go here */}

        <div className="s-msg">
          <p className="msg">hello this text bt ankita</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:20pm</p>
          </div>
        </div> 
        <div className="s-msg">
         <img  className='msg-img' src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:20pm</p>
          </div>
        </div>
        
        <div className="r-msg">
          <p className="msg">hello this text bt ankita</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:20pm</p>
          </div>
        </div>
        
      </div>



      <div className="chat-input">
        <input type="text" placeholder='Send a message' className="message-input" />
        <input type="file" id='image' accept='image/png, image/jpg' hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="Gallery" className="gallery-icon" />
        </label>
        <img src={assets.send_button} alt="Send" className="send-button" />
      </div>
    </div>
  );
}

export default ChatBox;
