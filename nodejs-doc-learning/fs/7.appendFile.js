const fs = require("fs");
const path = require("path");

const  path__ = path.resolve(__dirname, '../assert/text/write.txt');
fs.open(path__, 'a', (err,fd)=>{
    if(err) throw err;
    let content =  'append something else!'
    fs.appendFileSync(fd, content);
    console.log(content);
    
})