import React from "react";
import { Avatar } from "@mui/material";
import "./viedo.css";

function Viedos({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="viedos-card">
      <img src={image} alt="" className="viedo-img" />
      <div className="viedo-info">
        <Avatar className="viedo-avatar" alt={channel} src={channelImage} />

        <div className="viedo-text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Viedos;
