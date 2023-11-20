import React from 'react'
import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logoutUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';

function Sidenav() {

  const user = useSelector((state ) => state.data.user.user)
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  }

  return (
    <div className="sidenav">
        <img className="sidenav-logo" 
        src="https://th.bing.com/th/id/R.0dec417928863d43f88a01ec70a89eaf?rik=xvzuInJ9Hq8G5g&pid=ImgRaw&r=0" 
        alt="Instragram logo"/>

        <div className="sidenav-buttons">
          <button className="sidenav-button">
            <HomeIcon />
              <span>Home</span>
          </button>

          <button className="sidenav-button">
          <SearchIcon />
              <span>Search</span>
          </button>

          <button className="sidenav-button">
          <ExploreIcon />
              <span>Explore</span>
          </button>

          <button className="sidenav-button">
          <SlideshowIcon />
              <span>Reels</span>
          </button>

          <button className="sidenav-button">
          <ChatIcon />
              <span>Messages</span>
          </button>

          <button className="sidenav-button">
          <FavoriteBorderIcon />
              <span>Notifications</span>
          </button>

          <button className="sidenav-button">
          <AddCircleOutlineIcon />
              <span>Create</span>
          </button>

          <button className="sidenav-button">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
              <span>Profile</span>
          </button>
        </div>

        <div className="sidenav-more">
          <button className="sidenav-button">
          <MenuIcon />
          <span>More</span>
          </button>

          <button className="sidenav-button">
              <span>
                <button onClick={handleLogout} className="logout-button">Log out</button>
              </span>
        </button>
        </div>
    </div>
  )
}

export default Sidenav