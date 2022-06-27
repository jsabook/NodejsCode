const express = require('express')

let app = express()

const middleware1 = function(req,res,next){
    console.log(`经过中间件函数1，请求的页面${req.path}`)
    next()
}
const middleware2 = function(req,res,next){
    console.log(`经过中间件函数2，请求的页面${req.path}`)
    next()
}

app.use(middleware1)
app.use(middleware2)

app.get('/',(req,res)=>{
    
    res.send('index.html\n')
})
app.get('/helloWorld',(req,res)=>{
    res.send('hello world\n')
})
app.get('/others',(req,res)=>{
    res.send('other pages\n')
})
app.listen(80,()=>{
    console.log('listen to http://127.0.0.1')
})