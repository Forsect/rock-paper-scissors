import { Box, Circle } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import * as Types from "./HandFight.types";
import PlayerHand from "./PlayerHand";
import { useState } from "react";
import { Hands } from "shared/enums";
import colors from "shared/colors";

const HandFight = ({ opponent }: Types.Props) => {
  const handsColor = useColorModeValue(colors.main, colors.mainDark);

  const [playerHand, setPlayerHand] = useState<Hands | null>(null);

  return (
    <Circle
      size={opponent ? 300 : 250}
      borderWidth="5px"
      p={5}
      borderColor={handsColor}
    >
      {playerHand ? (
        <PlayerHand hand={playerHand} />
      ) : (
        <Box fontSize={20} fontWeight="bold">
          {opponent ? "Opponent's still picking..." : "Pick hand!"}
        </Box>
      )}
    </Circle>
  );
};

export default HandFight;
