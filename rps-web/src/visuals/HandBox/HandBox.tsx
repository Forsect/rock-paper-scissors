import * as Types from "./HandBox.types";
import { Square, useColorModeValue } from "@chakra-ui/react";
import colors from "shared/colors";

const HandBox = ({ children, onClick }: Types.Props) => {
  const handsColor = useColorModeValue(colors.main, colors.mainDark);

  return (
    <Square
      onClick={onClick}
      size={["90px", "140px", "200px"]}
      p={[2, 3, 5]}
      cursor="pointer"
      borderWidth={[2, 3, 5]}
      borderColor={handsColor}
      borderRadius={[30, 40, 50]}
      _hover={{ _active: { transform: "scale(0.9)" } }}
    >
      {children}
    </Square>
  );
};

export default HandBox;
