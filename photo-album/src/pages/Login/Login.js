import React, { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import "./Login.css";
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [email, setEmail] = useState('anye824@gmail.com');
  const [password, setPassword] = useState('Qwerty1!');
  const { login, error, isPending } = useLogin()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    if (!error) {
      // window.location.href = '/home'
      navigate('/home');
    }

  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <label>
        <span>email: </span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="anye824@gmail.com"
        />
      </label>
      <label>
        <span>password: </span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Qwerty1!"
        />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && <button className="btn" disabled>loading</button>}
      {error && <p>{error}</p>}
    </form>
  )
}
export default Login;