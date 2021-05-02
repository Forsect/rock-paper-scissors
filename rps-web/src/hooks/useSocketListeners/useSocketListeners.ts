import { useEffect } from "react";
import { GameRoomStates, Hands } from "shared/enums";
import * as Types from "./useSocketListeners.types";

const useSocketListeners = ({
  socket,
  setRoomState,
  setIsOpponentReady,
  setOpponentWantsRematch,
  setPlayerHand,
  setOpponentHand,
  playRematch,
}: Types.Props) => {
  useEffect(() => {
    socket.on("server:error", () => setRoomState(GameRoomStates.Error));
    socket.on("room:create", () => setRoomState(GameRoomStates.Waiting));
    socket.on("room:ready", () => setRoomState(GameRoomStates.Playing));
    socket.on("room:full", () => setRoomState(GameRoomStates.Full));
    socket.on("room:left", () => setRoomState(GameRoomStates.Left));
    socket.on("room:blocked", () => setRoomState(GameRoomStates.Full));
    socket.on("room:opponentReady", () => setIsOpponentReady(true));
    socket.on("room:suggestRematch", () => setOpponentWantsRematch(true));
    socket.on("room:playRematch", playRematch);
    socket.on("user:playerHand", (hand: Hands) => setPlayerHand(hand));
    socket.on("user:opponentHand", (hand: Hands) => setOpponentHand(hand));
    // eslint-disable-next-line
  }, []);
};

export default useSocketListeners;
