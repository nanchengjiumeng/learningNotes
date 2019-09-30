const http = require("http");
// 发送请求。
const options = {
  port: 1337,
  host: "127.0.0.1",
  headers: {
    Connection: "Upgrade",
    Upgrade: "websocket"
  }
};

const req = http.request(options);
req.end();

req.on("upgrade", (res, socket, upgradeHead) => {
  socket.write("1");
  socket.on("data", chunk => {
    console.log(chunk.toString());
  });
//   console.log("接收到响应");
  // socket.end();
  // process.exit(0);
});

req.on("error", ()=>{
    console.log("error");
    
})