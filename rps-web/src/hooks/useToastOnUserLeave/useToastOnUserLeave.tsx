import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { GameRoomStates } from "shared/enums";
import * as Types from "./useToastOnUserLeave.types";
import ToastOnUserLeave from "visuals/ToastOnUserLeave";
import { useHistory } from "react-router-dom";

const useToastOnUserLeave = ({ roomState }: Types.Props) => {
  const toast = useToast();
  const history = useHistory();

  useEffect(() => {
    if (roomState === GameRoomStates.Left) {
      toast({
        position: "top",
        duration: null,
        render: () => <ToastOnUserLeave historyPush={history.push} />,
      });
    }

    return () => {
      toast.closeAll();
    };
    // eslint-disable-next-line
  }, [roomState]);
};

export default useToastOnUserLeave;
