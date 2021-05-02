import "@testing-library/jest-dom/extend-expect";
import { render } from "test-utils";
import GameRoomWaiting from "./GameRoomWaiting";
import GameRoomWaitingMock from "./GameRoomWaiting.mock";

it("Should render with no errors", () => {
  render(<GameRoomWaiting {...GameRoomWaitingMock} />);
});
