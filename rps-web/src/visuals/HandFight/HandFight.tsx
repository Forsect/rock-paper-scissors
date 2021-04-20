import { Box, Circle } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";

interface props {
  opponent?: boolean;
}

const HandFight = ({ opponent: opponent }: props) => {
  const handsColor = useColorModeValue("black", "#e3e3e3");

  return (
    <Circle
      size={opponent ? 300 : 250}
      borderWidth="5px"
      borderColor={handsColor}
    >
      <Box fontSize={22} fontWeight="bold">
        {opponent ? "Opponent's still picking..." : "Pick hand!"}
      </Box>
    </Circle>
  );
};

export default HandFight;
