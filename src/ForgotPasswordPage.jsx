import React, { useState } from 'react';
import axios from 'axios';
import api from './api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Clear previous errors
    setMessage(null);
    try {
      const response = await api.post('/auth/forgot-password', {
        email,
      });
      console.log(response.data.message);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Something went wrong. wrong emailid Please try again.');
      }
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <br />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <div style={{ color: 'green' }}>{message}</div>}  {/* Success message */}
      {error && <div style={{ color: 'red' }}>{error}</div>}  {/* Error message */}
    </div>
  );
};

export default ForgotPassword;