import React from "react";
import "./style.css";

const InviteBox = ({ roomId }) => {
  return (
    <div className="invite_box">
      <h1>Waiting for Co-Player....</h1>
      <h3>Share the below code with your friend</h3>
      <div className="room_code">
        <h2>{roomId}</h2>
        <button
          onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
          Copy as Url
        </button>
      </div>
    </div>
  );
};

export default InviteBox;
