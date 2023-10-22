import React from 'react'
import "./Suggestions.css"
import { Avatar } from "@mui/material"
import { useSelector } from "react-redux"

function Suggestions() {

  const user = useSelector((state ) => state.data.user.user)

  return (
    <div className="suggestions">
      <div className="profile-username">
        <div className="profile-avatar">
          <Avatar>A</Avatar>
        </div>
        {user.username}
      </div>

      <div className="suggestions-title">Suggestions for you</div>
      <div className="suggestions-usernames">

        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
            <Avatar>A</Avatar>
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
            <Avatar>A</Avatar>
            </span>
            <div class="username-info">
              <span class="username">Anais</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
            <Avatar>A</Avatar>
            </span>
            <div class="username-info">
              <span class="username">Kenny</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
            <Avatar>A</Avatar>
            </span>
            <div class="username-info">
              <span class="username">Kevin</span>
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