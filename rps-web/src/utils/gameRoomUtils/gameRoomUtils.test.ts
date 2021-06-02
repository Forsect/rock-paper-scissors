import "@testing-library/jest-dom/extend-expect";
import { getGameResult } from "./gameRoomUtils";
import { Hands, GameResult } from "shared/enums";

test("Hand fights logic is fine", () => {
  const rock = Hands.Rock;
  const paper = Hands.Paper;
  const scissors = Hands.Scissors;

  let shouldBeDraw = getGameResult({ playerHand: rock, opponentHand: rock });
  expect(shouldBeDraw).toEqual(GameResult.Draw);

  shouldBeDraw = getGameResult({ playerHand: paper, opponentHand: paper });
  expect(shouldBeDraw).toEqual(GameResult.Draw);

  shouldBeDraw = getGameResult({ playerHand: scissors, opponentHand: scissors });
  expect(shouldBeDraw).toEqual(GameResult.Draw);

  let shouldPlayerWin = getGameResult({ playerHand: rock, opponentHand: scissors });
  expect(shouldPlayerWin).toEqual(GameResult.Win);

  shouldPlayerWin = getGameResult({ playerHand: paper, opponentHand: rock });
  expect(shouldPlayerWin).toEqual(GameResult.Win);

  shouldPlayerWin = getGameResult({ playerHand: scissors, opponentHand: paper });
  expect(shouldPlayerWin).toEqual(GameResult.Win);

  let shouldPlayerLose = getGameResult({ playerHand: rock, opponentHand: paper });
  expect(shouldPlayerLose).toEqual(GameResult.Lose);

  shouldPlayerLose = getGameResult({ playerHand: paper, opponentHand: scissors });
  expect(shouldPlayerLose).toEqual(GameResult.Lose);

  shouldPlayerLose = getGameResult({ playerHand: scissors, opponentHand: rock });
  expect(shouldPlayerLose).toEqual(GameResult.Lose);
});
