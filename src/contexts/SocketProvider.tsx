import React, { createContext, useMemo, useContext } from "react";
import { Socket, io } from "socket.io-client";

const SocketContext = createContext(React.PureComponent);

export const useSocket = () => {
  const socket: Socket = useContext(null);
  return socket;
};

export const SocketProvider = (props: any) => {
  const socket: Socket = io("http://localhost:3000/");

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
