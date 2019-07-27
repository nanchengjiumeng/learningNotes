const fs = require("fs");
const path = require("path");

let path__ = path.resolve(__dirname,"../assert/text/guanjiu.txt");
const watcher = fs.watch(path__, {}, ()=>{})

watcher.once('change', (filename)=>{
  console.log('chage: ' + filename + ' then close watcher.'); 
  watcher.close();
})

process.on('exit', ()=>{
  console.log('exit');
});





