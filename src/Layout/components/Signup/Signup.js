import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Signup.css';

async function signupUser(credentials, type) {
  const endpoint = type === 's' ? 'http://localhost:8080/auth/signup/student' : 'http://localhost:8080/auth/signup/teacher';
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      throw new Error(`Signup failed: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.token) {
      return data.token; 
    } else {
      throw new Error('Token not found in the response');
    }
  } catch (error) {
    console.error("Error during signup:", error);
    alert('Signup failed: ' + error.message);
    return null;
  }
}

export default function Signup({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!type || !['s', 't'].includes(type)) {
      alert("Please enter 's' for student or 't' for teacher.");
      return;
    }

    const credentials = { username, password, name, type };

    const token = await signupUser(credentials, type);

    if (token) {
      localStorage.setItem('jwt', token);

      setToken(token);

      window.location.href = "/login";
    } else {
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-wrapper">
      <h1>Please Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Name</p>
          <input type="text" onChange={e => setName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <label>
          <p>Type</p>
          <input type="text" placeholder="Enter 's' for student, 't' for teacher" onChange={e => setType(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Signup.propTypes = {
  setToken: PropTypes.func.isRequired
};