const fs = require('fs')
const path = require('path')
function  readFile(){
    return new Promise((resolve, reject)=>{
        fs.readFile(path.resolve(__dirname, './wang.txt'), (err, txt)=>{
           if(err){
               reject('err');
           }else{
               resolve(txt.toString())
           }
        })
    })
}


~(async function(){
    const res = readFile();
    res.then(res=>{
        console.log(res);
    })
    
    try{
    }catch(e){
        console.log(e);
    }
})()

console.log('script end!')

