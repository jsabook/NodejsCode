//导入模块
const http = require('http')
//创建服务器对象
const server = http.createServer()
//绑定request请求
server.on('request',(req,res)=>{
	//res 是响应对象，它包含了与服务器相关的数据与属性
	// 要发送到客户端的字符串
	const str = `your request url is ${req.url},and request method is ${req.method}`
	//向客户端发送指定的内容，并且结束这次请求的处理过程
    console.log(str)
	res.end(str)
})
//启动服务器
server.listen(80,()=>{
    console.log('http server running at http://127.0.0.1')
})