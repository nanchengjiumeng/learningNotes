const http = require('http');
const opts = {
    hostname: 'localhost',
    port: '10241',
    path: '/',
    method: 'GET'
}                

var req = http.request(opts, res=>{
    console.log('status: ' +  res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', chunk=>{
        console.log(chunk);
        
    })
})

req.end();