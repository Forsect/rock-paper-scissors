import { ChakraProvider } from "@chakra-ui/react";
import GameProvider from "./GameProvider";
import RouterProvider from "./RouterProvider";
import AppTheme from "./theme/AppTheme";

const Providers = () => {
  return (
    <ChakraProvider theme={AppTheme}>
      <GameProvider>
        <RouterProvider />
      </GameProvider>
    </ChakraProvider>
  );
};
export default Providers;
