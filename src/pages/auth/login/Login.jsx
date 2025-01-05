import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logged in with:', email, password);
    setEmail("")
    setPassword("")
  };

  return (
    <>
      <div className='Login'>
        <div className="auth-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin} className="auth-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='current_password'
              />
            </div>
            {/* Forgot Password Link using Link component */}
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit" className="auth-button">Login</button>
            <div className="forgot-password">
              <span>Not a memeber </span><Link to="/forgot-password">Signup Now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
