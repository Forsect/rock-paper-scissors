import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import * as Types from "./GameProvider.types";
import { GameRoomStates, Hands } from "shared/enums";

export const GameContext = createContext<Types.IGameContext | null>(null);

const socket = io("http://localhost:4000");

const GameProvider = ({ children }: Types.Props) => {
  const { id } = useParams<{ id: string }>();
  const [roomState, setRoomState] = useState(GameRoomStates.Loading);
  const [playerHand, setPlayerHand] = useState(Hands.None);
  const [opponentHand, setOpponentHand] = useState(Hands.None);

  useEffect(() => {
    if (!socket.connected) socket.connect();

    socket.emit("user:connecting", id);

    socket.on("room:create", () => setRoomState(GameRoomStates.Waiting));

    socket.on("room:ready", () => setRoomState(GameRoomStates.Playing));

    socket.on("room:full", () => setRoomState(GameRoomStates.Full));

    socket.on("room:left", () => setRoomState(GameRoomStates.Left));

    socket.on("room:blocked", () => setRoomState(GameRoomStates.Full));

    socket.on("user:playerHand", (hand: Hands) => setPlayerHand(hand));

    socket.on("user:opponentHand", (hand: Hands) => setOpponentHand(hand));

    return () => {
      socket.disconnect();
    };
  }, []);

  const setPlayerHandHandler = (hand: Hands) => {
    socket.emit("user:setHand", hand);
  };

  return (
    <GameContext.Provider
      value={{ roomState, setPlayerHandHandler, playerHand, opponentHand }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
