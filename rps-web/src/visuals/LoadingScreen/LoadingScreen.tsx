import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

const LoadingScreen = () => {
  const spinnerColor = useColorModeValue("gray.500", "gray.300");

  return (
    <Flex alignItems="center" justifyContent="center" h="100vh">
      <Spinner size="xl" color={spinnerColor} />
    </Flex>
  );
};

export default LoadingScreen;
