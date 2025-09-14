import express from "express";
import http from "http";
import { WebSocketServer, WebSocket } from "ws";

const app = express();

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

let userCount = 0;

wss.on("connection", (socket) => {
  userCount++;
  console.log("User connected. Current users:", userCount);

  socket.on("error", (error) =>
    console.log("Error while connecting to the websocket server:", error)
  );

  socket.on("message", (data, isBinary) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
    socket.send("hlw user ");
  });

  socket.on("close", () => {
    userCount--;
    console.log("User disconnected. Current users:", userCount);
  });
});

server.listen(2000, () => {
  console.log(`Your app is running on http://localhost:2000`);
});
