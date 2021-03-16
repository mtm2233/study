/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-16 17:27:10
 * @LastEditTime: 2021-03-16 17:35:29
 * @LastEditors: mTm
 */
const fs = require('fs')

const express = require('express');
const morgan = require('morgan');

const app = express();

const loggerWriter = fs.createWriteStream('./log/access.log', {
    flags: 'a+'
})

app.use(morgan('combined', {stream: loggerWriter}))

app.use((req,res,next) => {
    res.status(200)
    res.end('ok')
})

app.listen(8000, () => {
    console.log('启动成功：localhost:8000');
})