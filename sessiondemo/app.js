const express = require('express')
const session = require('express-session')

const app = express()


app.use(session({
    secret:'Jeff',
    resave: false,
    saveUninitialized: true,
}))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.post('/api/login',(req,res) =>{
    if (req.body.username != 'admin' || req.body.password !='password'){
        return res.send({
            status: 1,
            msg : "登陆失败"
        })
    }
    req.session.user = req.body
    req.session.islogin = true

    res.send({
        status:0,
        msg : "登录成功"
    })
})
app.get('/api/admin',(req,res) => {
	if (!req.session.islogin) {
		return res.send({
			status: 1,
            msg : "fail"
		})
	}
    res.send({
        status:0,
        msg:"success",
        username:req.session.username
    })
})
app.post('/api/loginout',(req,res) =>{
    req.session.destroy()
    res.send({
        status:0,
        msg : "退出成功"
    })
})

app.listen(80,() => {
    console.log('Start http://localhost/')
})