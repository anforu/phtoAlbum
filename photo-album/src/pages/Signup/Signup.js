import React, { useEffect, useState } from "react";
import './Signup.css'

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    const handleSubmit = (e) => {
      console.log(email, password, displayName)
    }

    return (
        <form onSubmit={handleSubmit} className="signup-form">
        <h2>Signup</h2>
        <label>
          <span>email: </span>
          <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
        </label>
        <label>
          <span>password: </span>
          <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
        </label>
        <label>
          <span>display name: </span>
          <input
          type="password"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          />
        </label>
        <button className="btn">Signup</button>
      </form>
    )
}
export default Signup;