import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials, type) {
  const endpoint = type === 's' ? 'http://localhost:8080/auth/signin/student' : 'http://localhost:8080/auth/signin/teacher';

  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())  
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if (type !== 's' && type !== 't') {
      alert("Please enter 's' for student or 't' for teacher.");
      return;
    }

    const credentials = { username, password };
    const token = await loginUser(credentials, type);

    if (token && token.token) {
      localStorage.setItem('jwt', token.token);
      
      setToken(token);

      window.location.href = "/Home"; 
    } else {
      alert("Login failed. Please check your credentials and try again.");
    }
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input 
            type="text" 
            value={username} 
            onChange={e => setUserName(e.target.value)} 
            required 
          />
        </label>
        <label>
          <p>Password</p>
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
          />
        </label>
        <label>
          <p>Type</p>
          <input 
            type="text" 
            placeholder="t for teacher, s for student" 
            value={type} 
            onChange={e => setType(e.target.value)} 
            required 
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
