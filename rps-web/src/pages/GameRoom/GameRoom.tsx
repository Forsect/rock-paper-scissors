import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import Paper from "assets/hands/Paper";
import Rock from "assets/hands/Rock";
import Scissors from "assets/hands/Scissors";
import { Link } from "react-router-dom";

const GameRoom = () => {
  const handsColor = useColorModeValue("black", "#e3e3e3");
  return (
    <Flex p={3}>
      <Link to="/">
        <Button>HOMEPAGE</Button>
      </Link>
      <Paper fill={handsColor} stroke={handsColor} />
      <Rock fill={handsColor} />
      <Scissors fill={handsColor} stroke={handsColor} />
    </Flex>
  );
};

export default GameRoom;
