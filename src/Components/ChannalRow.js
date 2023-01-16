import { Avatar } from "@mui/material";
import React from "react";
import "./channelRow.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function channalRow({ image, channelName, varified, subs, noOfViedos, desc }) {
  return (
    <div className="channel-row">
      <Avatar className="channel-logo" src={image} alt={channelName} />
      <div className="channel-text">
        <h4>
          {channelName} {varified && <CheckCircleOutlineIcon />}{" "}
        </h4>
        <p>
          {subs} Subscribres . {noOfViedos} Viedos
        </p>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default channalRow;
