import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Signup.css';

async function signupUser(credentials) {
  return fetch('http://localhost:8081/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Signup({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [type, setType] = useState();
  

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await signupUser({
      username,
      password,
      type,
      name
    });
    if (token.message)
      alert(token.message);
    else {
      alert(`You signed up as ${token.username}`);
      setToken(token);
    };
  }

  return(
    <div className="signup-wrapper">
      <h1>Please Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Name</p>
          <input type="text" onChange={e => setName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <label>
          <p>Type</p>
          <input type="text" placeholder='t for teacher, s for student' onChange={e => setType(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Signup.propTypes = {
  setToken: PropTypes.func.isRequired
};