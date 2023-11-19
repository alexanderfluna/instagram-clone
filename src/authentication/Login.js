import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);
  }
  
  return (
    <div className="login">
      <img src="https://th.bing.com/th/id/R.58e1880fc14bf0c89a7967c2792bcece?rik=YXXhJ847THBahQ&pid=ImgRaw&r=0" alt="Instagram"></img>

      <input 
      onChange={e => setEmail(e.target.value)} 
      type="email" 
      placeholder="Email"
      value = {email}
      />

      <input 
      onChange={e => setPassword(e.target.value)} 
      type="password" placeholder="Password" 
      value = {password}
      />
      
      <button onClick={handleLogin}>Log in</button>

      <div className="log-in-with-facebook">
        <img src="https://th.bing.com/th/id/OIP.WE109lmuCjsw8asJparTPgHaHa?rs=1&pid=ImgDetMain" alt="Instagram"></img>
        Log in with Facebook
      </div>

      <div className="forgot-password">Forgot password?</div>
    </div>
  )
}

export default Login