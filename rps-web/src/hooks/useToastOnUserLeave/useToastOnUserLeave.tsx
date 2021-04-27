import { useToast, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { GameRoomStates } from "shared/enums";
import * as Types from "./useToastOnUserLeave.types";
import { CloseIcon, WarningIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";

const useToastOnUserLeave = ({ roomState }: Types.Props) => {
  const toast = useToast();
  const history = useHistory();

  useEffect(() => {
    if (roomState === GameRoomStates.Left) {
      toast({
        position: "top",
        duration: null,
        render: () => (
          <Flex
            onClick={() => {
              toast.closeAll();
              history.push(`/`);
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

            <CloseIcon
              boxSize={2}
              onClick={(e) => {
                toast.closeAll();
                e.stopPropagation();
              }}
            />
          </Flex>
        ),
      });
    }
  }, [roomState]);
};

export default useToastOnUserLeave;
