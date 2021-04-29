import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import colors from "shared/colors";

const LoadingScreen = () => {
  const spinnerColor = useColorModeValue(colors.spinner, colors.spinnerDark);

  return (
    <Flex flex={1} align="center" justifyContent="center">
      <Spinner size="xl" color={spinnerColor} />
    </Flex>
  );
};

export default LoadingScreen;
