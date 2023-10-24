import { io } from "socket.io-client";

export const useSocket = () => {
  const socket = io("http://localhost:3000");
  // 连接
  const connect = (value: string) => {
    socket.on("connect", () => {
      value ? socket.emit("chat", value) : "";
    });
  };
  // 断开连接
  const disconnect = () => {
    socket.on("disconnect", () => {});
  };
  return { socket, connect, disconnect };
};
