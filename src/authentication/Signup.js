import React, { useState } from 'react'
import "./Signup.css"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase"

function Signup() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = (event) => {
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((authUser) => {
      signInWithEmailAndPassword(auth, email, password)
      .then(updateProfile(auth.currentUser, {
        displayName: username,
      }))
      .catch((err) => {
        alert(err)
      })
    })
  }

  return (
    <div className="signup">
      <img src="https://th.bing.com/th/id/R.0dec417928863d43f88a01ec70a89eaf?rik=xvzuInJ9Hq8G5g&pid=ImgRaw&r=0" alt="Instagram"></img>

      <input 
      onChange={e => setEmail(e.target.value)} 
      type="email" 
      placeholder="Email"
      value = {email}
      />

      <input 
      onChange={e => setUsername(e.target.value)}
      type="text"
      placeholder="Username"
      value = {username}
      />


      <input 
      onChange={e => setPassword(e.target.value)} 
      type="password" placeholder="Password" 
      value = {password}
      />

      <button onClick={handleSignUp}>Sign up</button>
    </div>
  )
}

export default Signup