import { Text, Circle } from "@chakra-ui/layout";
import { Flex, Spinner, useColorModeValue } from "@chakra-ui/react";
import * as Types from "./HandFight.types";
import PlayerHand from "./PlayerHand";
import colors from "shared/colors";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Hands } from "shared/enums";

const HandFight = ({
  playerHand,
  opponent,
  isVisible,
  isOpponentReady,
  fillColor,
}: Types.Props) => {
  const handsColor = useColorModeValue(colors.main, colors.mainDark);

  return (
    <Circle
      size={opponent ? 300 : 250}
      borderWidth="5px"
      p={5}
      borderColor={fillColor ? fillColor : handsColor}
    >
      {opponent ? (
        isOpponentReady ? (
          isVisible ? (
            <PlayerHand hand={playerHand} />
          ) : (
            <Flex flexDir="column" align="center" pb={8}>
              <CheckCircleIcon boxSize={12} color={handsColor} />
              <Text fontWeight="bold" fontSize={20} mt={8}>
                Opponent made a pick!
              </Text>
            </Flex>
          )
        ) : (
          <Flex flexDir="column" align="center" pb={8}>
            <Spinner speed="1.5s" size="xl" color={handsColor} />
            <Text fontWeight="bold" fontSize={20} mt={8}>
              Opponent's still picking...
            </Text>
          </Flex>
        )
      ) : playerHand !== Hands.None ? (
        <PlayerHand hand={playerHand} />
      ) : (
        <Text fontWeight="bold" fontSize={24}>
          Pick hand!
        </Text>
      )}
    </Circle>
  );
};

export default HandFight;
