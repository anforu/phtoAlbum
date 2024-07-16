import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import "./Login.scss";
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner'
import Album from '../../assets/familiar-album.jpeg'
import Input from "../../components/Input/Input";
import Links from '../../components/Links/Links'
import CustomButton from '../../components/CustomButton/CustomButton'

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
    <div>
      {loading ? (<Spinner type='triangle' visible={loading} />) :
        (<div className="login">
          <div className="login__container-image-form">
            <div className="login__photo">
              <img className="login__image" src={Album} />
            </div>

            <form onSubmit={handleSubmit} className="login__form" data-lpignore="true">
              <h2 className="login__no-margin-padding">Login</h2>

              <Input title="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input title="Password" type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} />
              {!isPending && <CustomButton title='Login' />}
              {isPending && <CustomButton title='loading' disabled />}
              {error && <p>{error}</p>}

              <Links title='Create Account' ariaLabel='Create Account' href='/signup' />
            </form>
          </div>
        </div>)
      }
    </div>
  )
}
export default Login;