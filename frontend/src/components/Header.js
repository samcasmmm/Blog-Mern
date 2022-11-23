import React from 'react';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">SHARE YOUR KNOWLEDGE</span>
          <span className="headerTitleLg">
            FAST<span>BLOGG</span>
          </span>
        </div>
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
