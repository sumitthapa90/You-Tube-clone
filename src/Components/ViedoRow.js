import React from "react";
import "./viedoRow.css";

function ViedoRow({ views, subs, desc, timestamp, channel, title, image }) {
  return (
    <div className="viedo-row">
      <img className="viedo-image" src={image} alt={channel} />
      <div className="viedoRow-text">
        <h3>{title}</h3>
        <p>Description: {desc}</p>
        <p>
          Channel Name: <span className="subs">{channel}:</span>
        </p>
        <p>
          Subscription: <span className="subs">{subs}:</span>
        </p>
        <p>
          Views: <span className="subs">{views}:</span>
        </p>
        <p>{timestamp} </p>
      </div>
    </div>
  );
}

export default ViedoRow;
