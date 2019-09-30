const http = require('http')
const fs = require('fs')
const path = require('path')
const formidable = require('formidable')

function handlePost(req, res){
    // JSON 数据
    var ct = req.headers['content-type']
    if(ct === 'application/json'){
        console.log('application/json')
        var buffers = []
        req.on('data', chunk => {
            buffers.push(chunk)
        })
        req.on('end', chunk => {
            var data = Buffer.concat(buffers).toString()
            data = JSON.parse(data)
            res.writeHead(200, {'Content-Type' : 'application/json'})
            res.end(JSON.stringify({
                name: data.name + ' yubiao'
            }))
        })
    }else if(ct === 'application/x-www-form-urlencoded'){ // query string
        var buffers = []
        req.on('data', chunk => {
            buffers.push(chunk)
        })
        req.on('end', chunk => {
            var data = Buffer.concat(buffers).toString()
            var pair = data.split('=')
            data = {} 
            data[pair[0]] = pair[1]
            res.writeHead(200, {'Content-Type' : 'application/json'})
            res.end(JSON.stringify({
                name: data.name + ' yubiao'
            }))
        })

    // xml 



    // 附件上传
    }else if(ct.includes('multipart/form-data')){
        var form = formidable.IncomingForm()
        // form.uploadDir = path.resolve(__dirname, './')
        form.on('fileBegin', function(name, file) {
            file.path = path.resolve(__dirname, `${file.name}`) // 修改文件保存的路径
        });
        form.parse(req, (err, fields, { file })=>{
            req.body = fields
            req.file = file
        })
    }else{
        res.end()
    }
}

http.createServer((req, res)=>{
    if(req.url === "/"){
        var html = fs.readFileSync(path.resolve(__dirname,'./index.html'))
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write(html)
        res.end()
    }else if(req.method === "POST"){
        handlePost(req,res)
    }else{
        res.end()
    }
    

}).listen(8888, ()=>{
    console.log('server in 8888 port.')
    
})