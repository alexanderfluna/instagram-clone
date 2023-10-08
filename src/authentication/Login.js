import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className="login">
      <img src="https://th.bing.com/th/id/R.58e1880fc14bf0c89a7967c2792bcece?rik=YXXhJ847THBahQ&pid=ImgRaw&r=0" alt="Instagram"></img>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Log in</button>
    </div>
  )
}

export default Login