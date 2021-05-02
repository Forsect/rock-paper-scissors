import { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import * as Types from "./GameProvider.types";
import { GameResult, GameRoomStates, Hands } from "shared/enums";
import gameRoomUtils from "utils/gameRoomUtils";
import useSocketListeners from "hooks/useSocketListeners";

export const GameContext = createContext<Types.IGameContext | null>(null);

const GameProvider = ({ children }: Types.Props) => {
  const { id } = useParams<{ id: string }>();
  const [roomState, setRoomState] = useState(GameRoomStates.Loading);
  const [playerHand, setPlayerHand] = useState(Hands.None);
  const [isOpponentReady, setIsOpponentReady] = useState(false);
  const [opponentHand, setOpponentHand] = useState(Hands.None);
  const [opponentWantsRematch, setOpponentWantsRematch] = useState(false);
  const [rematchSuggested, setRematchSuggested] = useState(false);
  const [gameResult, setGameResult] = useState(GameResult.Playing);
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const socketRef = useRef(io(process.env.REACT_APP_BACKEND_URL));
  const socket = socketRef.current;

  const setPlayerHandHandler = (hand: Hands) => {
    socket.emit("user:setHand", hand);
  };

  const showdown = () => {
    socket.emit("room:showdown");
  };

  const rematch = () => {
    setRematchSuggested(true);
    socket.emit("room:rematch");
  };

  const playRematch = () => {
    setGameResult(GameResult.Playing);
    setPlayerHand(Hands.None);
    setOpponentHand(Hands.None);
    setIsOpponentReady(false);
    setOpponentWantsRematch(false);
    setRematchSuggested(false);
  };

  useEffect(() => {
    if (!socket.connected) socket.connect();
    socket.emit("user:connecting", id);

    return () => {
      // socket.off("room:create");
      socket.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  useSocketListeners({
    socket,
    setRoomState,
    setIsOpponentReady,
    setOpponentWantsRematch,
    setPlayerHand,
    setOpponentHand,
    playRematch,
  });

  useEffect(() => {
    if (opponentHand !== Hands.None && playerHand !== Hands.None) {
      setGameResult(
        gameRoomUtils.getGameResult({
          playerHand,
          opponentHand,
        })
      );
    }
  }, [opponentHand, playerHand]);

  useEffect(() => {
    if (playerHand !== Hands.None && isOpponentReady) {
      showdown();
    }
    // eslint-disable-next-line
  }, [playerHand, isOpponentReady]);

  useEffect(() => {
    if (gameResult === GameResult.Win) {
      setPlayerScore((prev) => prev + 1);
      return;
    }

    if (gameResult === GameResult.Lose) {
      setOpponentScore((prev) => prev + 1);
      return;
    }
  }, [gameResult]);

  return (
    <GameContext.Provider
      value={{
        roomState,
        setPlayerHandHandler,
        playerHand,
        isOpponentReady,
        opponentHand,
        rematch,
        opponentWantsRematch,
        gameResult,
        playerScore,
        opponentScore,
        rematchSuggested,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
