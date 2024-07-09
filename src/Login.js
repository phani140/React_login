import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function onClick() {
    try {
      const response = await axios.post('http://localhost:8081/login', { username, password });
      if (response.data==='success') {
        navigate('/bar');
      } else {
        // Handle login failure (e.g., show an error message)
        alert('Invalid username or password');
      }
    } catch (error) {
      // Handle server error (e.g., show an error message)
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again later.');
    }
  }

  return (
    <div>
      <div>
        <label>
          Username:
          <input type='text' onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type='password' onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type='submit' onClick={onClick}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
