import { GameRoom } from "shared/types";

export const filterRooms = (
  gameRoom: GameRoom,
  roomId: string,
  callback: () => void
) => {
  const result = gameRoom.roomId !== roomId;
  if (!result) callback();

  return result;
};

export const findRoomForSocket = (
  gameRooms: GameRoom[],
  socketId: string
): GameRoom | undefined => {
  const foundRoom = gameRooms.find(
    (x) => x.host === socketId || x.opponent === socketId
  );

  return foundRoom;
};
