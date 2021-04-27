import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import colors from "shared/colors";
import { Hands } from "shared/enums";
import PaperHand from "visuals/PaperHand";
import RockHand from "visuals/RockHand";
import ScissorsHand from "visuals/ScissorsHand";
import * as Types from "./PlayerHand.types";

const PlayerHand = ({ hand }: Types.Props) => {
  const handsColor = useColorModeValue(colors.main, colors.mainDark);

  return (
    <>
      {hand === Hands.Rock && <RockHand fill={handsColor} />}
      {hand === Hands.Paper && (
        <PaperHand fill={handsColor} stroke={handsColor} />
      )}
      {hand === Hands.Scissors && (
        <ScissorsHand fill={handsColor} stroke={handsColor} />
      )}
    </>
  );
};

export default PlayerHand;
