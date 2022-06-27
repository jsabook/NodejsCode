// index.js
const express = require('express')
const request = require('request') //用于请求外部API（如https://api.weixin.qq.com/sns/oauth2/）的插件
const app = express()
const port = 3000
let AppID = 'wx51811d99d0457dd4'
let AppSecret = '4f22763fb5606b4252872f6ae6c924e6'
let code = ''
 
app.get('/getCode', (req, res) => {
    let return_uri = 'http://127.0.0.1:3000/getAccessToken'
    let scoped = 'snsapi_userinfo'
    let state = '123'
    // res.redirect('https://open.weixin.qq.com/connect/oauth2/authorize?appid='+AppID+'&redirect_uri='+return_uri+'&response_type=code&scope='+scoped+'&state='+state+'#wechat_redirect')
    console.log(`https://open.weixin.qq.com/connect/qrconnect?appid=${AppID}&redirect_uri=${return_uri}&response_type=code&scope=${scoped}&state=${state}#wechat_redirect`)
    res.redirect(`https://open.weixin.qq.com/connect/qrconnect?appid=${AppID}&redirect_uri=${return_uri}&response_type=code&scope=${scoped}&state=${state}#wechat_redirect`)
})
 
app.get('/getAccessToken', function(req, res){
    code = req.query.code
    console.log('得到授权码code：', code);
    request.get(
        {
            url:'https://api.weixin.qq.com/sns/oauth2/access_token?appid='+AppID+'&secret='+AppSecret+'&code='+code+'&grant_type=authorization_code'
        }, // 请求获取令牌
        function(error,response,body){
            if(response.statusCode == 200){
                let data = JSON.parse(body)
                let access_token = data.access_token;
                let openid = data.openid;
                request.get(
                    {
                        url:'https://api.weixin.qq.com/sns/userinfo?access_token='+access_token+'&openid='+openid+'&lang=zh_CN'
                    }, // 调用获取用户信息的api
                    function(error,response,body){
                        let userinfo = JSON.parse(body);
                        console.log(userinfo)
                        res.send("\
                            <h1>"+userinfo.nickname+" 的个人信息</h1>\
                            <p><img src='"+userinfo.headimgurl+"' /></p>\
                            <p>"+userinfo.city+"，"+userinfo.province+"，"+userinfo.country+"</p>\
                        ");
                    }
                )
            }
        }
    )
})
 
 
app.listen(port, () => {
    console.log('可以启动啦'+'http://localhost:3000')
})