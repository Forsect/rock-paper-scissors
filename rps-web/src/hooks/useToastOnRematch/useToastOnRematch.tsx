import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import * as Types from "./useToastOnRematch.types";

const useToastOnRematch = ({ opponentWantsRematch }: Types.Props) => {
  const toast = useToast();

  useEffect(() => {
    if (opponentWantsRematch) {
      toast({
        title: "Opponent wants a rematch!",
        position: "top",
        duration: null,
        status: "info",
      });
    }

    return () => {
      toast.closeAll();
    };
    // eslint-disable-next-line
  }, [opponentWantsRematch]);
};

export default useToastOnRematch;
