const http =require('http')
const fs =require('fs')
const url =require('url')
http.createServer((req, res)=>{
let urlObj=url.parse(req.url)//parse 把一个字符串转化为对象再返回
console.log(urlObj)
if(urlObj.pathname==='/getWeather'){
    res.end(JSON.stringify({data:'清'}))
}else{
    res.end(fs.readFileSync(__dirname + '/index.html'))
}

//发送响应数据
}).listen(8888)
console.log('open heety')

