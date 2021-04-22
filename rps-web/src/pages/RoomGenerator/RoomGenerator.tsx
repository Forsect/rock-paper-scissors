import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const RoomGenerator = () => (
  <Flex justifyContent="flex-end">
    <Link to="/game">
      <Button>GAMEPAGE</Button>
    </Link>
  </Flex>
);

export default RoomGenerator;
