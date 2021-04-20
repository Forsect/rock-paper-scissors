import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const RoomGenerator = () => (
  <Flex p={3}>
    <Link to="/game">
      <Button>GAMEROOM</Button>
    </Link>
  </Flex>
);

export default RoomGenerator;
