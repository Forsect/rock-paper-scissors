import { Flex, Fade, Button, Text, useColorModeValue, Spinner } from "@chakra-ui/react";
import useGameContext from "hooks/useGameContext";
import useToastOnRematch from "hooks/useToastOnRematch";
import useToastOnUserLeave from "hooks/useToastOnUserLeave";
import colors from "shared/colors";
import { GameRoomStates, Hands } from "shared/enums";
import HandBox from "visuals/HandBox";
import HandFight from "visuals/HandFight";
import PaperHand from "visuals/PaperHand";
import RockHand from "visuals/RockHand";
import ScissorsHand from "visuals/ScissorsHand";

const GameRoomPlaying = () => {
  const handsColor = useColorModeValue(colors.main, colors.mainDark);
  const {
    roomState,
    setPlayerHandHandler,
    playerHand,
    isOpponentReady,
    opponentHand,
    rematch,
    playerScore,
    opponentScore,
    rematchSuggested,
    opponentWantsRematch,
  } = useGameContext();

  useToastOnUserLeave({ roomState });

  useToastOnRematch({ opponentWantsRematch });

  return (
    <>
      <Flex flex={1} flexDirection="column" justifyContent="space-between" align="center" pb={4} mt={8}>
        <HandFight opponent isOpponentReady={isOpponentReady} playerHand={opponentHand} />
        <Flex flex={1} flexDir="column" justifyContent="space-between" align="center" py={4}>
          <Fade in={!!(playerScore | opponentScore)}>
            <Text fontSize={20} fontWeight="bold">
              {opponentScore}
            </Text>
          </Fade>

          <Fade in={opponentHand !== Hands.None && roomState !== GameRoomStates.Left} unmountOnExit>
            <Button w="120px" border={`2px ${handsColor} solid`} onClick={rematch}>
              {rematchSuggested ? <Spinner speed="0.8s" /> : "Rematch!"}
            </Button>
          </Fade>

          <Fade in={!!(playerScore | opponentScore)}>
            <Text fontSize={20} fontWeight="bold">
              {playerScore}
            </Text>
          </Fade>
        </Flex>

        <HandFight playerHand={playerHand} />
      </Flex>

      <Flex flex={0} mb={4} mt={8} align="center">
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
  );
};

export default GameRoomPlaying;
