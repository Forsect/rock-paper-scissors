import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import PaperHand from "visuals/PaperHand/PaperHand";
import RockHand from "visuals/RockHand/RockHand";
import ScissorsHand from "visuals/ScissorsHand/ScissorsHand";
import { useState } from "react";
import HandBox from "visuals/HandBox";
import HandFight from "visuals/HandFight";
import { Hands } from "shared/enums";
import colors from "shared/colors";

const GameRoom = () => {
  const handsColor = useColorModeValue(colors.main, colors.mainDark);
  const [mainPlayerHand, setMainPlayerHand] = useState<Hands | null>(null);
  const [enemyPlayerHand, setEnemyPlayerHand] = useState<Hands | null>(null);

  return (
    <Flex flex={1} direction="column">
      <Flex
        flex={4}
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        pb={12}
      >
        <HandFight opponent />
        <Box h={4} />
        <HandFight />
      </Flex>

      <Flex flex={1} alignItems="center">
        <Flex flex={1.5} />

        <Flex flex={3} justifyContent="space-around">
          <HandBox onClick={() => setMainPlayerHand(Hands.Rock)}>
            <RockHand fill={handsColor} />
          </HandBox>

          <Flex flex="1 0 16px" />

          <HandBox onClick={() => setMainPlayerHand(Hands.Paper)}>
            <PaperHand fill={handsColor} stroke={handsColor} />
          </HandBox>

          <Flex flex="1 0 16px" />

          <HandBox onClick={() => setMainPlayerHand(Hands.Scissors)}>
            <ScissorsHand fill={handsColor} stroke={handsColor} />
          </HandBox>
        </Flex>

        <Flex flex={1.5} />
      </Flex>
    </Flex>
  );
};

export default GameRoom;
