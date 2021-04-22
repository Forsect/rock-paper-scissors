import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

server.listen(4000, () => {
  console.log("listening on *:4000");
});

io.on("connection", (socket) => {
  console.log(`a user connected - id: ${socket.id}`);
});
