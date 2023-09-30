import React, { useEffect, useState } from "react";
import "./style.css";

import { useParams } from "react-router-dom";
import InviteBox from "../InviteBox";

const Room = ({ socket }) => {
  const { roomId } = useParams();
  const [coPlayer, setCoPlayer] = useState(false);

  const getName = () => {
    var name = localStorage.getItem("name");
    return name ? name : socket.id;
  };

  useEffect(() => {
    socket.emit("joinRoom", roomId, getName());
  });

  socket.on("userJoined", () => {
    setCoPlayer(true);
  });

  return (
    <div className="room">
      {coPlayer ? <div className="game"></div> : <InviteBox roomId={roomId} />}
    </div>
  );
};

export default Room;
