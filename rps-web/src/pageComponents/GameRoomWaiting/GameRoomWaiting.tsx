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
        fontSize={[12, 18, 24]}
        p={[2, null, 4]}
        arrowSize={16}
        borderRadius={["xl", null, "3xl"]}
        offset={[0, 16]}
        isOpen
        hasArrow
        placement="top"
      >
        <Input
          maxW={950}
          p={[0, 2, 8]}
          readOnly={true}
          borderColor={handsColor}
          borderWidth={[1, 2, 4]}
          fontSize={[11, 16, 24, 32]}
          textAlign="center"
          onClick={(e) => {
            e.currentTarget.select();
            onCopy();
          }}
          value={sendLink}
        />
      </Tooltip>

      <Text fontSize={[20, 24, 32]} fontWeight="bold" mt={8}>
        Send the link to your friend!
      </Text>
    </Flex>
  );
};

export default GameRoomWaiting;
