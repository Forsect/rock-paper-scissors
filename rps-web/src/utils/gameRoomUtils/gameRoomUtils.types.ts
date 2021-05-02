import { Hands } from "shared/enums";

export interface Props {
  playerHand: Exclude<Hands, Hands.None>;
  opponentHand: Exclude<Hands, Hands.None>;
}
