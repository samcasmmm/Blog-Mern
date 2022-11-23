import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const user = false;
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
        </div>
        <div className="topMiddle">
          <ul className="topList">
            <li className="topList-item">
              <Link to="/">Home</Link>
            </li>
            <li className="topList-item">
              <Link to="/about">About</Link>
            </li>
            <li className="topList-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="topList-item">
              <Link to="/write">Write</Link>
            </li>
            <li className="topList-item">
              <Link to="/login">{user && 'Logout'}</Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="TopImg"
            />
          ) : (
            <ul className="topList">
              <li className="topList-item">
                <Link to="/login">Login</Link>
              </li>
              <li className="topList-item">
                <Link to="/register">Register</Link>
              </li>
            </ul>
          )}
          <i className="topSearch fas fa-search"></i>
        </div>
      </div>
    </>
  );
};

export default Topbar;
