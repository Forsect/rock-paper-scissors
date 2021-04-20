import * as Types from "./HandBox.types";
import { Box, Square, useColorModeValue } from "@chakra-ui/react";

const HandBox = ({ children }: Types.Props) => {
  const handsColor = useColorModeValue("black", "#e3e3e3");

  return (
    <Square
      size={200}
      p={5}
      borderWidth="5px"
      borderColor={handsColor}
      borderRadius="50"
    >
      {children}
    </Square>
  );
};

export default HandBox;
