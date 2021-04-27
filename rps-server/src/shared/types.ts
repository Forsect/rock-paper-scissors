import { Hands } from "./enums";

export interface GameRoom {
  host: string;
  opponent: string;
  roomId: string;
  hostHand: Hands;
  opponentHand: Hands;
}
