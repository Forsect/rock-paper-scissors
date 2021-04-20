import { ChakraProvider, theme } from "@chakra-ui/react";
import RouterProvider from "./router/RouterProvider";
import AppTheme from "./theme/AppTheme";

const Providers = () => {
  return (
    <ChakraProvider theme={AppTheme}>
      <RouterProvider />
    </ChakraProvider>
  );
};
export default Providers;
