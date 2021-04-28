import colors from "shared/colors";
import { Hands } from "shared/enums";

export const getGameResult = (
  playerHand: Hands,
  opponentHand: Hands,
  setPlayerColor: React.Dispatch<React.SetStateAction<string>>,
  setOponnentColor: React.Dispatch<React.SetStateAction<string>>
) => {
  if ((playerHand + 1) % 3 === opponentHand) {
    setOponnentColor(colors.resultWinner);
    setPlayerColor(colors.resultLoser);
    return;
  }

  if (playerHand === opponentHand) {
    setOponnentColor(colors.resultDraw);
    setPlayerColor(colors.resultDraw);
    return;
  }

  setOponnentColor(colors.resultLoser);
  setPlayerColor(colors.resultWinner);
};
