import React, { useState } from 'react';
import { FaUser, FaLock, FaInstagram, FaFacebook, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Define the correct credentials
    const correctUsername = 'username';
    const correctPassword = 'password';

    // Check if the provided credentials match
    if (username === correctUsername && password === correctPassword) {
      // If login is successful, navigate to the main page
      navigate('/main');
    } else {
      // Set error message if login fails
      setError('Incorrect Username or Password');
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1>Login</h1>
        <div className="input-group">
          <FaUser className="icon" />
          <input
            type="text"
            placeholder="Username"
            className="input-box"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            className="input-box"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="checkbox-group">
          <input type="checkbox" id="remember-me" className="checkbox" />
          <label htmlFor="remember-me" className="checkbox-label">Remember me</label>
        </div>
        <div className="link-group">
          <a href="/signup" className="link">Sign in as Doctor</a>
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
       
        
        {/* Login with section */}
        <div className="Login-alt">
          <h1>Login with</h1>
          <div className="social-group">
            <FaInstagram className="icon-insta" />
            <label className='Insta-label'>Instagram</label>
          </div>
          <div className="social-group">
            <FaFacebook className="icon-insta" />
            <label className='Insta-label'>Facebook</label>
          </div>
          <div className="social-group">
            <FaGoogle className="icon-insta" />
            <label className='Insta-label'>Gmail</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
