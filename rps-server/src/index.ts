import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

let blockedRooms: string[] = [];

server.listen(4000, () => {
  console.log("listening on *:4000");
});

io.on("connection", (socket) => {
  console.log(`user ${socket.id} connected`);

  socket.on("user:connecting", (roomId: string) => {
    if (blockedRooms.includes(roomId)) {
      console.log(`room ${roomId} is blocked!`);
      socket.emit("room:blocked");
      return;
    }

    const room = io.of("/").adapter.rooms.get(roomId);

    if (!room) {
      socket.join(roomId);
      socket.emit("room:create");
      console.log(`user ${socket.id} created the room: ${roomId}`);
    } else if (room.size >= 2) {
      socket.emit("room:full");
      console.log(`room ${roomId} is full!`);
    } else {
      socket.join(roomId);
      io.to(roomId).emit("room:ready");
      console.log(`user ${socket.id} joined the room: ${roomId}`);
    }
  });
});

io.of("/").adapter.on("leave-room", (roomId, id) => {
  if (roomId !== id) console.log(`user ${id} has left the room ${roomId}`);
  blockedRooms = [...blockedRooms, roomId];
  io.to(roomId).emit("room:left");
});

io.of("/").adapter.on("delete-room", (roomId) => {
  console.log(`room ${roomId} was deleted`);
  blockedRooms = blockedRooms.filter((x) => x !== roomId);
});
