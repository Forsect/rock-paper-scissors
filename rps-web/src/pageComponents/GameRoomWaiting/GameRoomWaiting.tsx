import { Flex, Tooltip, Input, Text, useColorModeValue, useClipboard } from "@chakra-ui/react";
import colors from "shared/colors";
import * as Types from "./GameRoomWaiting.types";

const GameRoomWaiting = ({ sendLink }: Types.Props) => {
  const handsColor = useColorModeValue(colors.main, colors.mainDark);
  const { hasCopied, onCopy } = useClipboard(sendLink);

  return (
    <Flex flex={1} mt={24} direction="column" align="center" justifyContent="center">
      <Tooltip
        label={hasCopied ? "Copied!" : "Click to copy!"}
        fontSize={24}
        p={4}
        arrowSize={24}
        borderRadius="3xl"
        offset={[0, 20]}
        isOpen
        hasArrow
        placement="top"
      >
        <Input
          maxW={950}
          p={8}
          readOnly={true}
          borderColor={handsColor}
          borderWidth={4}
          fontSize={32}
          textAlign="center"
          onClick={(e) => {
            e.currentTarget.select();
            onCopy();
          }}
          value={sendLink}
        />
      </Tooltip>

      <Text fontSize={32} fontWeight="bold" mt={8}>
        Send the link to your friend!
      </Text>
    </Flex>
  );
};

export default GameRoomWaiting;
