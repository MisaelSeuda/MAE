import React, { useState } from 'react';
import axios from 'axios';
import "./GlobalStyles.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/login', { email, password });
    localStorage.setItem('token', response.data.token);
  };

  return (
    <div className="container">
      <section>
        <h2>Tela de login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <div className="btn-container">
            <button className="btn one" type="submit">Logar</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
