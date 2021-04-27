import { Circle, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import colors from "shared/colors";

const HomePage: React.FC = () => {
  const mainColor = useColorModeValue(colors.main, colors.mainDark);
  const history = useHistory();

  return (
    <Flex flex={1} justifyContent="center" alignItems="center">
      <Circle
        size={300}
        borderWidth={5}
        p={5}
        cursor="pointer"
        borderColor={mainColor}
        onClick={() => {
          const roomId = Math.random().toString(36).slice(2, 7);
          history.push(`/game/${roomId}`);
        }}
      >
        <Text fontSize={64} fontWeight="black">
          PLAY!
        </Text>
      </Circle>
    </Flex>
  );
};

export default HomePage;
