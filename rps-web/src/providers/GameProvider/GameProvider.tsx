import { createContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useParams } from "react-router-dom";
import * as Types from "./GameProvider.types";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { GameRoomStates } from "shared/enums";

export const GameContext = createContext<Types.IGameContext | null>(null);

const socket = io("http://localhost:4000");

const GameProvider: React.FC<Types.Props> = ({ children }) => {
  const { id } = useParams<{ id: string }>();
  const [roomState, setRoomState] = useState(GameRoomStates.Waiting);

  useEffect(() => {
    if (!socket.connected) socket.connect();

    socket.emit("user's connecting", id);

    socket.on("room's ready", () => setRoomState(GameRoomStates.Playing));

    socket.on("room's full", () => setRoomState(GameRoomStates.Full));

    socket.on("user left", () => setRoomState(GameRoomStates.Left));

    socket.on("room's blocked", () => setRoomState(GameRoomStates.Full));

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <GameContext.Provider value={{ roomState }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
