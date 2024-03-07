import React, { useState, useCallback, useEffect, FormEvent } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { useSocket } from "../../contexts/SocketProvider";

const Lobby = () => {
  const [username, setusername] = useState(String);
  const [room, setRoom] = useState(String);

  const socket = useSocket();
  const navigate: NavigateFunction = useNavigate();

  const handleSubmitForm = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (username.trim() !== "" && room.trim() !== "") {
        socket.emit("room:join", { username, room });
      }
    },
    [username, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data: any) => {
      const { room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div>
      <h1>Lobby</h1>
      <div>
        <label htmlFor="username">Email ID</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <br />
        <label htmlFor="room">Room Number</label>
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <button onClick={handleSubmitForm}>Join</button>
      </div>
    </div>
  );
};

export default Lobby;