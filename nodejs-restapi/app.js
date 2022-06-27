const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.get('/',(req,res) => {
    res.send('Home')
})

const apiRouter = require('./apiRouter')
app.use('/api',apiRouter)

app.listen(80,() => {
    console.log('start http://127.0.0.1')
})