import { createContext } from "react";
import { io } from "socket.io-client";
import * as Types from "./GameProvider.types";

export const GameContext = createContext<Types.IGameContext | null>(null);

const socket = io("http://localhost:4000");

const GameProvider: React.FC<Types.Props> = ({ children }) => {
  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
};

export default GameProvider;
