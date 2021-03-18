/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-17 09:54:36
 * @LastEditTime: 2021-03-17 10:04:25
 * @LastEditors: mTm
 */
const express = require('express');

const failCodeMap = new Map([
    [400, { msg: '请求错误' }],
    [401, { msg: '未认证' }],
    [403, { msg: '无权限' }],
])

const app = express();

app.use('/login', (req,res,next) => {
    next({
        status: 500
    })
})

app.use((err,req,res,next) => {
    res.json({
        message: failCodeMap.get(err.status)?.msg || 'Not Found',
        status: err.status
    })
})

app.listen(8000, () => {
    console.log('启动成功：localhost:8000');
})