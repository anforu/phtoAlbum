import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner'
import Album from '../../assets/familiar-album.jpeg'
import Input from "../../components/Input/Input";

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
        (<div className="login">

          <div className="container-image-form">


            <div className="photo">
              <img className="image" src={Album} />
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <h2 className="no-margin-padding">Login</h2>

              <Input title="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input title="Password" type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} />
              {!isPending && <button className="btn">Login</button>}
              {isPending && <button className="btn" disabled>loading</button>}
              {error && <p>{error}</p>}
            </form>

          </div>
        </div>)
      }
    </>
  )
}
export default Login;