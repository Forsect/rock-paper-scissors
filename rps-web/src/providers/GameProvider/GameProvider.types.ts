import { GameResult, GameRoomStates, Hands } from "shared/enums";

export interface Props {
  children: React.ReactNode;
}

export interface IGameContext {
  roomState: GameRoomStates;
  setPlayerHandHandler: (hand: Hands) => void;
  playerHand: Hands;
  isOpponentReady: boolean;
  opponentHand: Hands;
  rematch: () => void;
  opponentWantsRematch: boolean;
  gameResult: GameResult;
  playerScore: number;
  opponentScore: number;
  rematchSuggested: boolean;
}
