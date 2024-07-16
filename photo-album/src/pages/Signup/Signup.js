import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import './Signup.scss'
import Spinner from '../../components/Spinner/Spinner'
import Album from '../../assets/familiar-album.jpeg'
import Input from "../../components/Input/Input";
import CustomButton from "../../components/CustomButton/CustomButton";

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    signup(email, password, displayName)
    setLoading(false)
  }
  const { signup, isPending, error } = useSignup()

  return (
    <>
      {loading ? (<Spinner type='triangle' visible={loading} />) :
        (
          <div className="signup">

            <div className="signup__container-image-form-signup">


              <div className="signup__photo-signup">
                <img className="signup__image-signup" src={Album} />
              </div>
              <form onSubmit={handleSubmit} className="signup__signup-form" data-lpignore="true">
                <h2 className="signup__no-margin-padding">Signup</h2>

                <Input title="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <Input title="Password" type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password} />
                <Input title="Display Name" type="text"
                  onChange={(e) => setDisplayName(e.target.value)}
                  value={displayName} />


                {!isPending && <CustomButton title='Signup'/>}
                {isPending && <CustomButton disabled title='loading'/>}
                {error && <p>{error}</p>}
              </form>
            </div>
          </div>
        )
      }
    </>
  )
}
export default Signup;