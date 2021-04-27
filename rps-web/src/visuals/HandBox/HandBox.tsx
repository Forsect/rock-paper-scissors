import * as Types from "./HandBox.types";
import { Square, useColorModeValue } from "@chakra-ui/react";
import colors from "shared/colors";

const HandBox = ({ children, onClick }: Types.Props) => {
  const handsColor = useColorModeValue(colors.main, colors.mainDark);

  return (
    <Square
      onClick={onClick}
      size={200}
      p={5}
      cursor="pointer"
      borderWidth="5px"
      borderColor={handsColor}
      borderRadius="50"
      _hover={{ _active: { transform: "scale(0.9)" } }}
    >
      {children}
    </Square>
  );
};

export default HandBox;
