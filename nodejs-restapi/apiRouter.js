const express = require('express')
const apiRouter = express.Router()

apiRouter.get('/get',(req,res) => {
    const query = req.query
    res.send({
        status: 0,
        msg : "Get 请求成功",
        data : query
    })
})

//Post api

apiRouter.post('/post',(req,res) => {
    const body = req.body
    res.send({
        status: 0,
        msg : "Post 请求成功",
        data : body
    })
})
module.exports = apiRouter