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
      <Flex flex={1} flexDirection="column" justifyContent="space-between" align="center" pt={{ md: 6 }}>
        <HandFight opponent isOpponentReady={isOpponentReady} playerHand={opponentHand} />
        <Flex flex={1} flexDir="column" justifyContent="space-between" align="center" py={4}>
          <Fade in={!!(playerScore | opponentScore)}>
            <Text fontSize={[12, 16, 20]} fontWeight="bold">
              {opponentScore}
            </Text>
          </Fade>

          <Flex flex="0 0 80px" align="center">
            <Fade in={opponentHand !== Hands.None && roomState !== GameRoomStates.Left} unmountOnExit>
              <Button my={4} w={["80px", "100px", "120px"]} border={`2px ${handsColor} solid`} onClick={rematch}>
                {rematchSuggested ? <Spinner speed="0.8s" /> : <Text fontSize={[12, 16]}>Rematch!</Text>}
              </Button>
            </Fade>
          </Flex>

          <Fade in={!!(playerScore | opponentScore)}>
            <Text fontSize={[12, 16, 20]} fontWeight="bold">
              {playerScore}
            </Text>
          </Fade>
        </Flex>

        <HandFight playerHand={playerHand} />
      </Flex>

      <Flex flex={0} mb={[2]} mt={[4, 8]} align="center" justify="center">
        <HandBox onClick={() => setPlayerHandHandler(Hands.Rock)}>
          <RockHand fill={handsColor} />
        </HandBox>

        <Flex flex={0} mx={[4, null, 12, 32]}>
          <HandBox onClick={() => setPlayerHandHandler(Hands.Paper)}>
            <PaperHand fill={handsColor} stroke={handsColor} />
          </HandBox>
        </Flex>

        <HandBox onClick={() => setPlayerHandHandler(Hands.Scissors)}>
          <ScissorsHand fill={handsColor} stroke={handsColor} />
        </HandBox>
      </Flex>
    </>
  );
};

export default GameRoomPlaying;
