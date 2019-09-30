const { EventEmitter } = require('events')

var emitter = new EventEmitter();

emitter.on('tst', function(msg){
    console.log(msg);
})

setTimeout(() => {
    emitter.emit('tst', 'hello world!')
}, 3000);