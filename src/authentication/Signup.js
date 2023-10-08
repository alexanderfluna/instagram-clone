import React from 'react'
import "./Signup.css"

function Signup() {
  return (
    <div className="signup">
      <img src="https://th.bing.com/th/id/R.58e1880fc14bf0c89a7967c2792bcece?rik=YXXhJ847THBahQ&pid=ImgRaw&r=0" alt="Instagram"></img>
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Sign in</button>
    </div>
  )
}

export default Signup