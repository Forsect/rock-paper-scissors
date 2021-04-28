import { Hands } from "./enums";

export interface GameRoom {
  roomId: string;
  host: string;
  opponent?: string;
  hostHand: Hands;
  opponentHand: Hands;
}
