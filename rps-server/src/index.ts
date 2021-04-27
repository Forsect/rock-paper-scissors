import express from "express";
import { createServer } from "http";
import { Hands } from "shared/enums";
import { Server } from "socket.io";
import * as chalker from "./chalker";
// import { GameRoom } from "./shared/types";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

let blockedRooms: string[] = [];
// let gameRooms: GameRoom[] = [];

server.listen(4000, () => {
  console.log("listening on *:4000");
});

io.on("connection", (socket) => {
  console.log(`user ${socket.id} connected`);

  socket.on("user:connecting", (roomId: string) => {
    if (blockedRooms.includes(roomId)) {
      chalker.logRedMessage(`room ${roomId} is blocked!`);
      socket.emit("room:blocked");
      return;
    }

    const room = io.of("/").adapter.rooms.get(roomId);

    if (!room) {
      socket.join(roomId);
      socket.emit("room:create");
      chalker.logGreenMessage(`user ${socket.id} created the room: ${roomId}`);
    } else if (room.size >= 2) {
      socket.emit("room:full");
      chalker.logRedMessage(`room ${roomId} is full!`);
    } else {
      socket.join(roomId);
      io.to(roomId).emit("room:ready");
      chalker.logBlueMessage(`user ${socket.id} joined the room: ${roomId}`);
    }
  });

  socket.on("user:setHand", (hand: Hands) => {
    const sids = io.of("/").adapter.sids.get(socket.id)!;
    const gameRoomId = [...sids].find((x) => x !== socket.id)!;
    const gameRoom = io.of("/").adapter.rooms.get(gameRoomId)!;
    const opponentSocket = [...gameRoom].find((x) => x !== socket.id)!;

    socket.emit("user:playerHand", hand);
    socket.to(opponentSocket).emit("user:booleeasdas", hand);
  });
});

io.of("/").adapter.on("leave-room", (roomId, id) => {
  if (roomId !== id) {
    chalker.logYellowMessage(`user ${id} has left the room ${roomId}`);
    blockedRooms = [...blockedRooms, roomId];
  }
  io.to(roomId).emit("room:left");
});

io.of("/").adapter.on("delete-room", (roomId) => {
  blockedRooms = blockedRooms.filter((x) => {
    console.log(`room ${roomId} was deleted`);
    return x !== roomId;
  });
});
