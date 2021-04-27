import { IGameContext } from "providers/GameProvider/GameProvider.types";
import { useContext } from "react";
import { GameContext } from "./../providers/GameProvider/GameProvider";

const useGameContext = () => {
  const context = useContext(GameContext) as IGameContext;

  if (context === undefined) {
    throw new Error("useGameContext must be used within a UserProvider");
  }

  return context;
};

export default useGameContext;
