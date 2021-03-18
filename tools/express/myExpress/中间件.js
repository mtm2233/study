/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-16 10:08:04
 * @LastEditTime: 2021-03-16 10:13:16
 * @LastEditors: mTm
 */
const express = require('express');

const app = express();

// 最普通的中间件
app.use((req,res,next) => {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.write('普通中间件，全部拦截\n')
    next();
})

// path匹配中间件
app.use('/home',(req,res,next) => {
    res.write('path匹配中间件，home\n')
    next();
})

// path和method匹配中间件
app.get('/home',(req,res,next) => {
    res.end('path和method匹配中间件，get Home')
    next();
})

// 注册多个中间件
app.get('/login',(req,res,next) => {
    console.log('多个中间件1');
    res.write('多个中间件1\n')
    next();
},(req,res,next) => {
    console.log('多个中间件2');
    res.write('多个中间件2\n')
    next();
},(req,res,next) => {
    console.log('多个中间件3');
    res.write('多个中间件3\n')
    next();
},(req,res,next) => {
    console.log('多个中间件4');
    res.end('多个中间件4\n')
    next();
})

app.listen(8000, () => {
    console.log('启动成功：localhost:8000');
})
