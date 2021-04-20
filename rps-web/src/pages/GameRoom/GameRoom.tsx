import { Box, Button, Center, Flex, useColorModeValue } from "@chakra-ui/react";
import Paper from "assets/hands/Paper";
import Rock from "assets/hands/Rock";
import Scissors from "assets/hands/Scissors";
import { Link } from "react-router-dom";
import HandBox from "visuals/HandBox";
import HandFight from "visuals/HandFight";

const GameRoom = () => {
  const handsColor = useColorModeValue("black", "#e3e3e3");
  return (
    <Flex flex={1} direction="column">
      <Flex
        flex={4}
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        pb={12}
      >
        <HandFight opponent />
        <HandFight />
      </Flex>

      <Flex flex={1} justifyContent="space-around" alignItems="center">
        <HandBox>
          <Rock fill={handsColor} />
        </HandBox>

        <HandBox>
          <Paper fill={handsColor} stroke={handsColor} />
        </HandBox>

        <HandBox>
          <Scissors fill={handsColor} stroke={handsColor} />
        </HandBox>
      </Flex>
    </Flex>
  );
};

export default GameRoom;
