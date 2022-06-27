const express = require('express')
const app = express()

// 注册路由模块
const router = require('./router')
app.use(router)

app.listen(80,() => {
    console.log('http://localhost')
})