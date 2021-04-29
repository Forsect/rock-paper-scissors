import { ToastId, useToast } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { GameRoomStates } from "shared/enums";
import * as Types from "./useHerokuToastOnBoot.types";

const useHerokuToastOnBoot = ({ roomState }: Types.Props) => {
  const toast = useToast();
  const herokuToastRef = useRef<ToastId>();

  useEffect(() => {
    const herokuToast = setTimeout(() => {
      if (roomState === GameRoomStates.Waiting) {
        herokuToastRef.current = toast({
          title: "Heroku is booting!",
          description: "Server has been frozen. Wait around 20s to proceed.",
          duration: null,
        });
      }
    }, 2500);

    if (roomState === GameRoomStates.Waiting) {
      clearTimeout(herokuToast);
      toast.close(herokuToastRef.current!);
    }

    return () => {
      clearTimeout(herokuToast);
    };
  }, [roomState]);
};

export default useHerokuToastOnBoot;
