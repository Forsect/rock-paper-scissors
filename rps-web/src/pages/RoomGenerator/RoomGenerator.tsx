import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const RoomGenerator = () => (
  <Flex justifyContent="flex-end">
    <Link to="/game">
      <Button>GAMEPAGE</Button>
    </Link>
  </Flex>
);

export default RoomGenerator;
