const dgram = require('dgram');
const socket  = dgram.createSocket("udp4");
socket.on("message", function(msg, rinfo){
    console.log("msg: " + msg);
    console.log("from: " + rinfo.address + ":" +rinfo.port);
})
socket.on('listening', function(){
    var address = socket.address();
    console.log("server listening: " + address.address + ":" + address.port);
})
socket.bind(13141);