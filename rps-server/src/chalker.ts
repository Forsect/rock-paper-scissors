import { greenBright, blueBright, red, yellow, hex } from "chalk";

export const logGreenMessage = (message: string) => {
  console.log(greenBright(message));
};

export const logBlueMessage = (message: string) => {
  console.log(blueBright(message));
};

export const logRedMessage = (message: string) => {
  console.log(red(message));
};

export const logYellowMessage = (message: string) => {
  console.log(yellow(message));
};

export const logOrangeMessage = (message: string) => {
  console.log(hex("#ffa500")(message));
};
