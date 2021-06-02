import "@testing-library/jest-dom/extend-expect";
import GameProvider from "providers/GameProvider";
import { render } from "test-utils";
import GameRoomPlaying from "./GameRoomPlaying";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");

  return {
    ...originalModule,
    useParams: () => ({
      id: "TestGame",
    }),
  };
});

it("Should render with no errors", () => {
  render(
    <GameProvider>
      <GameRoomPlaying />
    </GameProvider>
  );
});
