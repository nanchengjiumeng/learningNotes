const net = require('net')

const server = net.createServer(function(socket){
    socket.on('data', function(data){
        console.log(data.toString());
        
        socket.write('你好')
    })
    socket.on('end', function(){
        console.log('断开链接');
    })

    socket.write('helleo erveryone:')
})

server.listen(8014, function(){
    console.log('setuped 8014');
    
})