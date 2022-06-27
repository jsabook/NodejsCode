    // 导入express
    const express = require('express')
    //创建路由对象
    const router = express.Router()
    //挂在具体的路由
    router.get('/user/list',(req,res)=>{
        res.send('Get user list\n')
    })
    router.post('/user/add',(req,res) =>{
        res.send('Add new user.\n')
    })
    // 向外导出路由对象
    module.exports = router