//应用启动入口
const express = require('express')
const port = 80
//创建app应用 =》NodeJS Http.createServer();
let app = express();

//监听http请求

app.get('/',function (req,res,next) {
    res.send("Hello world")
})
app.use(express.static('public'))

app.listen(port);