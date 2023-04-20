import React, { useState } from 'react';
import axios from 'axios';
import "../styles/GlobalStyles.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/login', { email, password })
      .then(
        (response) => {
          console.log(response.data);
        }
      )
      .catch((err) => console.error(err))

  };

  return (
    <div className="containerLogin">
      <h2 className="titleNameLogin">Multi Atendimento ao Empreendedor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit" className='btnLogin'>Log in</button>
      </form>
    </div>
  );
}

export default Login;
