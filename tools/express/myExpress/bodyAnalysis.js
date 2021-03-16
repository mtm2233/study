/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-16 10:13:59
 * @LastEditTime: 2021-03-16 10:48:23
 * @LastEditors: mTm
 */
const express = require('express');

const app = express();

// 编写解析request body中间件
// app.use((req,res,next) => {
//     if(req.headers['content-type'] === 'application/json') {
//         req.on('data',data => {
//             const userInfo = JSON.parse(data.toString());
//             req.body = userInfo;
//         })
//         req.on('end', () => {
//             next();
//         })
//     }else {
//         next();
//     }
// })

// 应用中间件
app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.post('/login',(req,res,next) => {
    console.log(req.body);
    res.end('登陆成功~')
})

app.listen(8000, () => {
    console.log('启动成功：localhost:8000');
})