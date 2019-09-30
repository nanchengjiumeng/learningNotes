const http = require('http');
const server  = http.createServer((req,res)=>{
    debugger
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('hello world\n');
})

server.listen(10241, ()=>{
    console.log('正在监听10241端口。');
    
})