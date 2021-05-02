import { WarningIcon, CloseIcon } from "@chakra-ui/icons";
import { Button, Flex, Text, useToast } from "@chakra-ui/react";
import * as Types from "./ToastOnUserLeave.types";

const ToastOnUserLeave = ({ historyPush }: Types.Props) => {
  const toast = useToast();

  return (
    <Flex
      onClick={() => {
        toast.closeAll();
        historyPush(`/`);
      }}
      flex={1}
      py={2}
      pl={4}
      pr={2}
      cursor="pointer"
      justifyContent="space-between"
      borderRadius="lg"
      bgColor={"orange.200"}
      color="#000"
    >
      <WarningIcon boxSize={5} alignSelf="center" />
      <Flex flexDirection="column">
        <Text fontWeight="bold"> Opponent has left the room!</Text>
        <Text fontSize={12}>Click to play again!</Text>
      </Flex>
      <Button
        onClick={(e) => {
          toast.closeAll();
          e.stopPropagation();
        }}
        bgColor={"orange.200"}
        _hover={{ bgColor: "orange.100" }}
        size="xs"
      >
        <CloseIcon boxSize={2} />
      </Button>
    </Flex>
  );
};

export default ToastOnUserLeave;
