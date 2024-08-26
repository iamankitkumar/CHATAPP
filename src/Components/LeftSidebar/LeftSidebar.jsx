import React from 'react';
import assets from './../../assets/assets';
import './LeftSidebar.css';

const LeftSidebar = () => {
  return (
    <div className='ls'>
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className='logo' alt="Logo" />
          <div className="menu">
            <img src={assets.menu_icon} alt="Menu Icon" />
            <div className="sub-menu">
              <p>Edit Profile</p>
              <hr/>
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="Search Icon" className='search-icon' />
          <input type="text" placeholder='Search here' className='search-input' />
        </div>
      </div>
      <div className="ls-list">
        {Array(12).fill("").map((item,index)=>(
          <div key={index} className="friends">
          <img src={assets.profile_img} alt="" />
          <div>
            <p>Ankit</p>
            <span>Hello How are you?</span>
          </div>

        </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSidebar;
