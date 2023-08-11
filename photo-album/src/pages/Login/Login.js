import React, { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner'

const Login = () => {

  const [email, setEmail] = useState('anye824@gmail.com');
  const [password, setPassword] = useState('Qwerty1!');
  const { login, error, isPending } = useLogin()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    login(email, password).catch(e => console.log('Error in login ', e))
    setLoading(false)
    if (!error) {
      // window.location.href = '/home'
      navigate('/home');
    }

  }

  return (
    <>
      {loading ? (<Spinner type='triangle' visible={loading} />) :
        (<form onSubmit={handleSubmit} className="login-form">
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
        </form>)
      }
    </>
  )
}
export default Login;