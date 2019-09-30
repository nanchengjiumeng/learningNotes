const fs = require("fs");
const path = require("path");

console.log(__dirname);


function main(){
    const path_ = path.resolve(__dirname,'../assert/text/');
    
    fs.readdir(path_,function(arg1,arg2){
        console.dir(arg2); // ['guanjiu.txt']
    })
}

main();