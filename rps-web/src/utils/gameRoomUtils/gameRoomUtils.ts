import { Hands, GameResult } from "shared/enums";
import { Props } from "./gameRoomUtils.types";

export const getGameResult = ({ playerHand, opponentHand }: Props) => {
  switch (playerHand) {
    case Hands.Rock:
      switch (opponentHand) {
        case Hands.Rock:
          return GameResult.Draw;
        case Hands.Paper:
          return GameResult.Lose;
        case Hands.Scissors:
          return GameResult.Win;
      }
    // eslint-disable-next-line
    case Hands.Paper:
      switch (opponentHand) {
        case Hands.Rock:
          return GameResult.Win;
        case Hands.Paper:
          return GameResult.Draw;
        case Hands.Scissors:
          return GameResult.Lose;
      }
    // eslint-disable-next-line
    case Hands.Scissors:
      switch (opponentHand) {
        case Hands.Rock:
          return GameResult.Lose;
        case Hands.Paper:
          return GameResult.Win;
        case Hands.Scissors:
          return GameResult.Draw;
      }
  }
};
