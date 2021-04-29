import { createServer } from "http";
import { Hands } from "./shared/enums";
import { Server } from "socket.io";
import * as chalker from "./chalker";
import * as roomUtils from "./utils/roomUtils";
import { GameRoom } from "./shared/types";

const PORT = process.env.PORT || 4000;

const server = createServer();
const io = new Server(server, { cors: { origin: "*" } });

let gameRooms: GameRoom[] = [];

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

io.on("connection", (socket) => {
  console.log(`user ${socket.id} connected`);

  socket.on("user:connecting", (roomId: string) => {
    const foundRoom = gameRooms.find((x) => x.roomId === roomId);

    if (!foundRoom) {
      gameRooms = [
        ...gameRooms,
        {
          roomId: roomId,
          host: socket.id,
          hostHand: Hands.None,
          opponentHand: Hands.None,
        },
      ];
      socket.join(roomId);
      socket.emit("room:create");
      chalker.logGreenMessage(`user ${socket.id} created the room: ${roomId}`);
      return;
    }

    if (foundRoom.opponent) {
      socket.emit("room:full");
      chalker.logRedMessage(`room ${roomId} is full!`);
      return;
    }

    gameRooms = gameRooms.map((gameRoom) =>
      gameRoom.roomId === foundRoom.roomId
        ? ({ ...foundRoom, opponent: socket.id } as GameRoom)
        : gameRoom
    );

    socket.join(roomId);
    io.to(foundRoom.roomId).emit("room:ready");
    chalker.logBlueMessage(`user ${socket.id} joined the room: ${roomId}`);
  });

  socket.on("user:setHand", (hand: Hands) => {
    if (!(hand in Hands)) {
      chalker.logRedMessage(
        `'${hand}' was not recognized as proper hand value`
      );
      return;
    }

    const foundRoom = roomUtils.findRoomForSocket(gameRooms, socket.id);

    if (foundRoom.host === socket.id) {
      if (foundRoom.hostHand === Hands.None) {
        gameRooms = gameRooms.map((gameRoom) =>
          gameRoom.roomId === foundRoom.roomId
            ? ({ ...foundRoom, hostHand: hand } as GameRoom)
            : gameRoom
        );
        socket.emit("user:playerHand", hand);
        io.to(foundRoom.opponent!).emit("room:opponentReady");
      }
    } else {
      if (foundRoom.opponentHand === Hands.None) {
        gameRooms = gameRooms.map((gameRoom) =>
          gameRoom.roomId === foundRoom.roomId
            ? ({ ...foundRoom, opponentHand: hand } as GameRoom)
            : gameRoom
        );
        socket.emit("user:playerHand", hand);
        io.to(foundRoom.host!).emit("room:opponentReady");
      }
    }
  });

  socket.on("room:showdown", () => {
    const foundRoom = roomUtils.findRoomForSocket(gameRooms, socket.id);

    if (foundRoom.host === socket.id) {
      socket.emit("user:opponentHand", foundRoom.opponentHand);
      chalker.logOrangeMessage(`room ${foundRoom.roomId} did showdown`);
    } else {
      socket.emit("user:opponentHand", foundRoom.hostHand);
    }
  });
});

io.of("/").adapter.on("leave-room", (roomId, id) => {
  if (roomId !== id) {
    chalker.logYellowMessage(`user ${id} has left the room ${roomId}`);
    io.to(roomId).emit("room:left");
  }
});

io.of("/").adapter.on("delete-room", (roomId: string) => {
  const foundRoom = gameRooms.find((x) => x.roomId === roomId);
  if (foundRoom) {
    gameRooms = gameRooms.filter((x) =>
      roomUtils.filterRooms(x, foundRoom.roomId, () => {
        chalker.logRedMessage(`room ${foundRoom.roomId} was deleted`);
      })
    );
  }
});
