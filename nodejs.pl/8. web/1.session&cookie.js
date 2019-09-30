const url = require('url')
const http = require('http')
const sessions = {}
var key = 'session_id',
    EXPIRES  = 20 * 60 * 1000

var generate = function(){
    var session = {};
    session.id = (new Date()).getTime() + Math.random();
    session.cookie = {
        expire : (new Date()).getTime() + EXPIRES
    }
    sessions[session.id] = session
    return session
}

var parseCookie = function(cookie){
    var cookies = {}
    if(!cookie){
        return cookies
    }
    var list = cookie.split(';')
    list.forEach( c => {
        var pair = c.split('=')
        cookies[pair[0].trim()] = pair[1]
    });
    return cookies
}

// console.log(generate());

function handle(req, res){
    // console.log(req.session);
    // console.log(sessions);
    
    
    if(!req.headers.cookie){
        res.setHeader('Set-Cookie', 'num=1')
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.end('hello world!!! fisrt!!\n' )    
    }else{   
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.end('hello world!!! '+ req.headers.cookie +'\n' )
    }
}



const server  = http.createServer((req,res)=>{
    // console.log(req.method)
    // var parsed = url.parse(req.url, true)
    if((/.ico$/i).test(req.url)){
        return res.end()
    }
    
    console.log(sessions);
    
    var cookie = req.headers.cookie
    req.cookies = parseCookie(cookie)

    // console.log(req.headers)
    var id = req.cookies[key]
    if(!id){
        req.session = generate()
    }else{
        var session = sessions[id]
        if(session){
            if(session.cookie.expire > (new Date()).getTime()){
                // session未过期, 更新过期时间
                session.cookie.expire  =  (new Date()).getTime() + EXPIRES
                req.session = session
            }else{
                // session 已经过期, 生成新的session
                delete session[id]
                req.session = generate()
            }
        }else{
            req.session = generate()
        }
    }

    var writeHead = res.writeHead;
    res.writeHead = function(){
        var cookies = res.getHeader('Set-Cookie')
        res.setHeader('Set-Cookie', key+'=' + req.session.id)
        return writeHead.apply(this, arguments)
        
    }
    
    handle(req, res)
})


server.listen(8888, ()=>{
    console.log('正在监听 8888 端口。')
})