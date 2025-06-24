import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../../styles/login.css';
import axios from 'axios'; // Import axios for API calls
import Dialogbox from '../../../Component/dialogbox/Dialogbox';
import { UserContext } from '../../../App'; // Import UserContext for user state management
const Login = () => {
  const user = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [pwd, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false); // Success state

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8080/login', {
        params: {
          email: email,
          pwd: pwd,
        },
      });
      user(response.data.data);
      
      // Assuming the response contains a token or user data
      setSuccess(true); // Set success state to true on successful login

      // sessionStorage.setItem('token', response.data.token);

      // Clear input fields
    } catch (error) {
      console.error('Login failed:', error);
      setError(true); // Set error message on failure
    }
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className="Login">
        <div className="auth-container">
          {success && <Dialogbox message={'Login Successfull'} />}
          {error && <Dialogbox message={'Login Failed'} />}
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
                value={pwd}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current_password"
              />
            </div>
            {/* Forgot Password Link using Link component */}
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit" className="auth-button">
              Login
            </button>
            <div className="forgot-password">
              <span>Not a memeber </span>
              <Link to="/forgot-password">Signup Now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
