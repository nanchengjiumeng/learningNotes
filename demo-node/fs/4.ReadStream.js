const stream = require("stream");
const fs = require("fs");
const path = require("path");

const path_ = path.resolve(__dirname, "../assert/text/guanjiu.txt");
const fsReadStream = fs.createReadStream(path_);
fsReadStream.once('open', ()=>{
    console.log('open');
    console.log(fsReadStream.path);    
});

fsReadStream.once('ready', ()=>{
    console.log('ready');
});

fsReadStream.once('close', ()=>{
    console.log('close');
});

fsReadStream.once('data', (data)=>{
    console.log('data:', data);
    console.log(fsReadStream.bytesRead);
});


fsReadStream.once('end', (data)=>{
    console.log('end');
    console.log(fsReadStream.bytesRead);
    fsReadStream.close();
});



