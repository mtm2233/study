/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-17 09:06:07
 * @LastEditTime: 2021-03-17 09:23:30
 * @LastEditors: mTm
 */

const express = require('express');
const userRouter = require('./routers/user')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/user',userRouter)

app.use((req,res,next) => {
    res.status(404)
    res.end('Not Found');
})

app.listen(8000, () => {
    console.log('启动成功：localhost:8000');
})