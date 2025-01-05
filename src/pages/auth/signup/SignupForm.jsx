import React, { useState } from 'react';
import '../../../styles/signupform.css'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'former',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation or submission logic here
    console.log('Form Data Submitted:', formData);
    setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        userType: 'former',
    })
  };

  return (
    <div className="signup-form">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User Type:</label>
          <select name="userType" value={formData.userType} onChange={handleChange}>
            <option value="former">Former</option>
            <option value="user">User</option>
          </select>
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            autoComplete='password'
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            autoComplete='confirm_password'
            onChange={handleChange}
            required
          />
        </div>

        <button className='signupForm_submit_btn' type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
