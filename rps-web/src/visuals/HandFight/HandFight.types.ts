import { Hands } from "shared/enums";
import { XOR } from "shared/types";

export type Props = XOR<PlayerProps, OpponentProps>;

interface PlayerProps {
  playerHand: Hands;
}

interface OpponentProps extends PlayerProps {
  opponent: boolean;
  isVisible: boolean;
}
