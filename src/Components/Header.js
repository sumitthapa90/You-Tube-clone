import React, { useState } from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [input, setInput] = useState("");

  return (
    <div className="header">
      <Link to="/">
        <div className="header-left">
          <MenuIcon />
          <img className="header-logo" src="/images/logo1.svg" alt="1" />
        </div>
      </Link>

      <div className="header-input">
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <Link to={`/search/${input}`}>
          <SearchIcon className="header-btn" />
        </Link>
      </div>

      <div className="header-right">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
        <Avatar
          className="header-icon"
          src="https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg"
          alt="2"
        />
      </div>
    </div>
  );
}

export default Header;
