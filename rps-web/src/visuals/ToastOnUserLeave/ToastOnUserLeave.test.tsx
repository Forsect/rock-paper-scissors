import "@testing-library/jest-dom/extend-expect";
import { render } from "test-utils";
import ToastOnUserLeave from "./ToastOnUserLeave";

it("Should render with no errors", () => {
  render(
    <ToastOnUserLeave
      historyPush={(string: string) => {
        console.log(string);
      }}
    />
  );
});
