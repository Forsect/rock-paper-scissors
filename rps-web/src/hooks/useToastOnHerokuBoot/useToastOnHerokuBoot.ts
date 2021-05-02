import { ToastId, useToast } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { GameRoomStates } from "shared/enums";
import * as Types from "./useHerokuToastOnBoot.types";

const useToastOnHerokuBoot = ({ roomState }: Types.Props) => {
  const toast = useToast();
  const herokuToastRef = useRef<ToastId>();

  useEffect(() => {
    const herokuToast = setTimeout(() => {
      if (roomState === GameRoomStates.Loading) {
        herokuToastRef.current = toast({
          title: "Heroku is booting!",
          description: "Server has been frozen. Wait around 20s to proceed.",
          duration: null,
        });
      }
    }, 3000);

    if (roomState !== GameRoomStates.Loading) {
      clearTimeout(herokuToast);
      toast.close(herokuToastRef.current!);
    }

    return () => {
      clearTimeout(herokuToast);
      toast.close(herokuToastRef.current!);
    };
    // eslint-disable-next-line
  }, [roomState]);
};

export default useToastOnHerokuBoot;
