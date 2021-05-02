import { ChakraProvider } from "@chakra-ui/react";
import RouterProvider from "./RouterProvider";
import AppTheme from "./theme/AppTheme";
import PageProvider from "./PageProvider";

const Providers = () => {
  return (
    <ChakraProvider theme={AppTheme}>
      <PageProvider>
        <RouterProvider />
      </PageProvider>
    </ChakraProvider>
  );
};
export default Providers;
