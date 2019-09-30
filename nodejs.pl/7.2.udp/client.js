const dgram = require('dgram');
const client = dgram.createSocket('udp4');

var message = message = Buffer.from("你好，我是客户端");
client.send(message, 0, message.length, 13141, "localhost", function(err, bytes){
    client.close();
})