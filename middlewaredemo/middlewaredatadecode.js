const express = require('express')
const { send } = require('process')
const app = express()
const qs = require('querystring')

app.use((req,res,next)=>{
    let str = ''
    req.on('data',(chunk) =>{
        str +=chunk
    })
    req.on('end',() => {
        const body = qs.parse(str)
        req.body = body
        next()
    })
})
app.post('/data',(req,res) => {
    
    console.log(req.body)
    res.send(req.body)
})

app.listen(80, () => {
    console.log('http://localhost/')
})