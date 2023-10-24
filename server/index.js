const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer((req, res) => {
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  res.end("返回数据");
});

const io = new Server(httpServer, {
  cors: {
    origin: "*" // 跨域配置
  }
});

httpServer.listen(3000, () => {
  console.log("服务已启动");
});

let msgList = [];

// 监听客户端传提过来的信息
io.on("connection", socket => {
  socket.on("message", msg => {
    msgList.push(msg);
    socket.emit("message", msgList);
    console.log(msgList);
  });

  socket.on("clearChatRecord", () => {
    msgList = [];
    socket.emit("message", msgList);
  });
});
