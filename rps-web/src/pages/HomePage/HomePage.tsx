import { Circle, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import colors from "shared/colors";

const HomePage = () => {
  const mainColor = useColorModeValue(colors.main, colors.mainDark);
  const history = useHistory();

  return (
    <Flex flex={1} justifyContent="center" align="center">
      <Circle
        size={[200, 300]}
        borderWidth={5}
        p={5}
        cursor="pointer"
        borderColor={mainColor}
        onClick={() => {
          const roomId = Math.random().toString(36).slice(2, 7);
          history.push(`/game/${roomId}`);
        }}
      >
        <Text fontSize={[32, 64]} fontWeight="black">
          PLAY!
        </Text>
      </Circle>
    </Flex>
  );
};

export default HomePage;
