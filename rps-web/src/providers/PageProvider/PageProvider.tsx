import { Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import * as Types from "./PageProvider.types";

const PageProvider = ({ children }: Types.Props) => {
  return (
    <Flex direction="column" minH="100vh" p={[1, 2, 4]}>
      <Flex justifyContent="flex-end">
        <ColorModeSwitcher />
      </Flex>
      {children}
    </Flex>
  );
};

export default PageProvider;
