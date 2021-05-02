import { GameRoomStates, Hands } from "shared/enums";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

export interface Props {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  setRoomState: React.Dispatch<React.SetStateAction<GameRoomStates>>;
  setIsOpponentReady: React.Dispatch<React.SetStateAction<boolean>>;
  setOpponentWantsRematch: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayerHand: React.Dispatch<React.SetStateAction<Hands>>;
  setOpponentHand: React.Dispatch<React.SetStateAction<Hands>>;
  playRematch: () => void;
}
