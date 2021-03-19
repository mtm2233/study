/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-16 09:58:13
 * @LastEditTime: 2021-03-19 09:26:18
 * @LastEditors: mTm
 */
// @see https://www.expressjs.com.cn/guide/routing.html
const fs = require('fs')

const express = require('express');
// 日志
const morgan = require('morgan');

const app = express();
const newsRouter = require('./routers/news')

const loggerWriter = fs.createWriteStream('./log/access.log', {
    flags: 'a+'
})
// 错误码
const failCodeMap = new Map([
    [400, { msg: '请求错误' }],
    [401, { msg: '未认证' }],
    [403, { msg: '无权限' }],
])

// 应用中间件
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('combined', {stream: loggerWriter}))

app.use('/news', newsRouter);

app.use((err,req,res,next) => {
    res.json({
        message: failCodeMap.get(err.status)?.msg || 'Not Found',
        status: err.status
    })
})

app.use((req,res,next) => {
    res.end('Not Found')
})

app.listen(8000, () => {
    console.log('启动成功：localhost:8000');
})