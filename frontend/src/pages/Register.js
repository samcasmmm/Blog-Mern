import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div className="register">
        <span className="registerTitle">Login</span>
        <form className="registerForm">
          <label>Email</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
          />
          <button className="registerButton">Register</button>
        </form>
        <button className="registerButton registerLoginButton">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </>
  );
};

export default Register;
