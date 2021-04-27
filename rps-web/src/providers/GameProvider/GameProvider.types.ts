import { GameRoomStates } from "shared/enums";

export interface Props {
  children: React.ReactNode;
}

export interface IGameContext {
  roomState: GameRoomStates;
}
