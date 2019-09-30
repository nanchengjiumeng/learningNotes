const http = require('http');

// 创建 HTTP 服务器。
const srv = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('响应内容');
});
srv.on('upgrade', (req, socket, head) => {
  socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
               'Upgrade: WebSocket\r\n' +
               'Connection: Upgrade\r\n' +
               '\r\n');

  socket.pipe(socket); // 响应回去。

  socket.on('data', chunk=>{
      var num = 1;
      setInterval(()=>{
        num++;
        socket.write(num.toString())
      },2000)
  })
});

srv.on("error", ()=>{
    console.log("error");
    
})

// 服务器正在运行。
srv.listen(1337, '127.0.0.1', () => {

});

