import { Avatar } from "@mui/material"
import React from 'react'
import "./Suggestions.css"

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions-title">Suggestions for you</div>
      <div className="suggestions-usernames">

        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
            <Avatar>R</Avatar>
            </span>
            <div class="username-info">
              <span class="username">Alexander</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
            <Avatar>R</Avatar>
            </span>
            <div class="username-info">
              <span class="username">Alexander</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
            <Avatar>R</Avatar>
            </span>
            <div class="username-info">
              <span class="username">Alexander</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
            <Avatar>R</Avatar>
            </span>
            <div class="username-info">
              <span class="username">Alexander</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>

      </div>
    </div>
  )
}

export default Suggestions