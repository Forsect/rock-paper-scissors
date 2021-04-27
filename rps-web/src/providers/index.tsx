import { ChakraProvider } from "@chakra-ui/react";
import RouterProvider from "./RouterProvider";
import AppTheme from "./theme/AppTheme";

const Providers = () => {
  return (
    <ChakraProvider theme={AppTheme}>
      <RouterProvider />
    </ChakraProvider>
  );
};
export default Providers;
