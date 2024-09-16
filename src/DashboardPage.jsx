import React, { useState, useEffect } from 'react';
import api from './api';

import { Link, useNavigate } from 'react-router-dom';
const DashboardPage = () => {
  const [urlCounttotal, setUrlCounttotal] = useState({
    count :0
  })
  const [urlCount, setUrlCount] = useState({
    daily: 0,
    monthly: 0,
  });
  const navigate = useNavigate();


  const handleClick = () => {
    navigate('/login');
  }
  const handleRegister = () =>{
    navigate('/auth/register')
  }

  return (
    <div>
      <h2>Forgot password page click on login button below then forgot password to for setting new password</h2>
      <br />
      <p>Click on Register button to get registration</p>
   

      <br />
      <button onClick={handleRegister}>Register</button>
      <br />
      <br />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default DashboardPage;