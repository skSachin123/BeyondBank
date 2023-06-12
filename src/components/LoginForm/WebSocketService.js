import axios from "axios";
import { socket } from "./socket";
import { Socket } from "socket.io";
import socketIOClient from "socket.io-client";

export const LoginService = {
  connectWebSocket,
};
let webSocket;
let url;
function connectWebSocket(userID, sessionID, token) {
  url = `wss://app.journeyid.io/api/iframe/ws/users/${userID}/sessions/${sessionID}`;
  console.log("web socket send data: ", url);

  const socket = socketIOClient(url);
  socket.on("FromAPI", (data) => {
    setResponse(data);
  });
}
