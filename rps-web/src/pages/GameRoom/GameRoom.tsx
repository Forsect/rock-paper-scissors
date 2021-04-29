import {
  Box,
  Flex,
  Input,
  Text,
  Tooltip,
  useColorModeValue,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import PaperHand from "visuals/PaperHand/PaperHand";
import RockHand from "visuals/RockHand/RockHand";
import ScissorsHand from "visuals/ScissorsHand/ScissorsHand";
import { useEffect, useState } from "react";
import HandBox from "visuals/HandBox";
import HandFight from "visuals/HandFight";
import { GameRoomStates, Hands } from "shared/enums";
import colors from "shared/colors";
import path from "path";
import useGameContext from "./../../hooks/useGameContext";
import { useParams } from "react-router-dom";
import useToastOnUserLeave from "hooks/useToastOnUserLeave";
import gameRoomUtils from "utils/gameRoomUtils";
import LoadingScreen from "visuals/LoadingScreen";
import useHerokuToastOnBoot from "hooks/useHerokuToastOnBoot";

const GameRoom = () => {
  const { id } = useParams<{ id: string }>();
  const handsColor = useColorModeValue(colors.main, colors.mainDark);
  const sendLink = path.join(process.env.REACT_APP_FRONTEND_URL, "game", id);
  const { hasCopied, onCopy } = useClipboard(sendLink);
  const {
    roomState,
    setPlayerHandHandler,
    playerHand,
    isOpponentReady,
    opponentHand,
    showdown,
  } = useGameContext();
  const [isOpponentVisible, setIsOpponentVisible] = useState(false);
  const [playerColor, setPlayerColor] = useState("");
  const [opponentColor, setOpponentColor] = useState("");
  const toast = useToast();

  useToastOnUserLeave({ roomState });

  useHerokuToastOnBoot({ roomState });

  useEffect(() => {
    return () => {
      toast.closeAll();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (playerHand !== Hands.None && isOpponentReady) {
      showdown();
      setIsOpponentVisible(true);
    }
    // eslint-disable-next-line
  }, [playerHand, isOpponentReady]);

  useEffect(() => {
    if (opponentHand !== Hands.None) {
      gameRoomUtils.getGameResult(
        playerHand,
        opponentHand,
        setPlayerColor,
        setOpponentColor
      );
    }
    // eslint-disable-next-line
  }, [opponentHand]);

  return (
    <Flex flex={1} direction="column">
      {roomState === GameRoomStates.Loading && <LoadingScreen />}
      {roomState === GameRoomStates.Waiting && (
        <Flex
          flex={1}
          mt={24}
          direction="column"
          align="center"
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
              maxW={950}
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
            align="center"
            pb={12}
            mt={4}
          >
            <HandFight
              opponent
              isVisible={isOpponentVisible}
              isOpponentReady={isOpponentReady}
              fillColor={opponentColor}
              playerHand={opponentHand}
            />
            <Box h={4} />
            <HandFight fillColor={playerColor} playerHand={playerHand} />
          </Flex>

          <Flex flex={1} align="center">
            <Flex flex={1.5} />

            <Flex flex={3} justifyContent="space-around">
              <HandBox onClick={() => setPlayerHandHandler(Hands.Rock)}>
                <RockHand fill={handsColor} />
              </HandBox>

              <Flex flex="1 0 16px" />

              <HandBox onClick={() => setPlayerHandHandler(Hands.Paper)}>
                <PaperHand fill={handsColor} stroke={handsColor} />
              </HandBox>

              <Flex flex="1 0 16px" />

              <HandBox onClick={() => setPlayerHandHandler(Hands.Scissors)}>
                <ScissorsHand fill={handsColor} stroke={handsColor} />
              </HandBox>
            </Flex>

            <Flex flex={1.5} />
          </Flex>
        </>
      )}
      {roomState === GameRoomStates.Full && (
        <Flex flex={1} justifyContent="center" align="center">
          <Text fontWeight="black" fontSize={48}>
            Room is full!
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default GameRoom;
