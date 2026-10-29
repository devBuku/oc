import { Server } from "socket.io";
import express, { Express } from "express";
import http from "http";

const app: Express = express();
const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
    console.log('a user connected');
});

server.listen(3000, function () {
    console.log('Server is listening on port:', 3000);
});