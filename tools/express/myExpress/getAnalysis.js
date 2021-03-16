/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-16 17:55:10
 * @LastEditTime: 2021-03-16 18:00:46
 * @LastEditors: mTm
 */
const express = require('express');

const app = express();

app.get('/news/:id',(req,res,next) => {
    console.log(req.params.id);
    res.write(req.params.id + '\n');
    res.end('请求成功~');
})

app.get('/news',(req,res,next) => {
    console.log(req.query);
    res.json(req.query)
})

app.listen(8000, () => {
    console.log('启动成功：localhost:8000');
})