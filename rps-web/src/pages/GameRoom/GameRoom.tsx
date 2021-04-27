import {
  Box,
  Flex,
  Input,
  Text,
  Tooltip,
  useColorModeValue,
  useClipboard,
  useToast,
  Button,
  ToastId,
} from "@chakra-ui/react";
import PaperHand from "visuals/PaperHand/PaperHand";
import RockHand from "visuals/RockHand/RockHand";
import ScissorsHand from "visuals/ScissorsHand/ScissorsHand";
import { useEffect, useRef, useState } from "react";
import HandBox from "visuals/HandBox";
import HandFight from "visuals/HandFight";
import { GameRoomStates, Hands } from "shared/enums";
import colors from "shared/colors";
import useGameContext from "./../../hooks/useGameContext";
import { useHistory, useParams } from "react-router-dom";
import { CloseIcon, WarningIcon } from "@chakra-ui/icons";

const GameRoom = () => {
  const { id } = useParams<{ id: string }>();
  const handsColor = useColorModeValue(colors.main, colors.mainDark);
  const sendLink = `http://localhost:3000/game/${id}`;
  const { hasCopied, onCopy } = useClipboard(sendLink);
  const { roomState } = useGameContext();
  const toast = useToast();
  const history = useHistory();
  const [mainPlayerHand, setMainPlayerHand] = useState<Hands | null>(null);
  const [enemyPlayerHand, setEnemyPlayerHand] = useState<Hands | null>(null);

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

  useEffect(() => {
    return () => {
      toast.closeAll();
    };
  }, []);

  return (
    <Flex flex={1} direction="column">
      {roomState === GameRoomStates.Waiting && (
        <Flex
          flex={1}
          mt={24}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
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
              maxW={650}
              p={8}
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
      )}
      {(roomState === GameRoomStates.Playing ||
        roomState === GameRoomStates.Left) && (
        <>
          <Flex
            flex={4}
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            pb={12}
          >
            <HandFight opponent />
            <Box h={4} />
            <HandFight />
          </Flex>

          <Flex flex={1} alignItems="center">
            <Flex flex={1.5} />

            <Flex flex={3} justifyContent="space-around">
              <HandBox onClick={() => setMainPlayerHand(Hands.Rock)}>
                <RockHand fill={handsColor} />
              </HandBox>

              <Flex flex="1 0 16px" />

              <HandBox onClick={() => setMainPlayerHand(Hands.Paper)}>
                <PaperHand fill={handsColor} stroke={handsColor} />
              </HandBox>

              <Flex flex="1 0 16px" />

              <HandBox onClick={() => setMainPlayerHand(Hands.Scissors)}>
                <ScissorsHand fill={handsColor} stroke={handsColor} />
              </HandBox>
            </Flex>

            <Flex flex={1.5} />
          </Flex>
        </>
      )}
      {roomState === GameRoomStates.Full && (
        <>
          <Text>FULL</Text>
        </>
      )}
    </Flex>
  );
};

export default GameRoom;
