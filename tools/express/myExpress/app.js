/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-16 09:58:13
 * @LastEditTime: 2021-03-19 09:21:36
 * @LastEditors: mTm
 */
// @see https://www.expressjs.com.cn/guide/routing.html
const express = require('express');

const app = express();

app.listen(8000, () => {
    console.log('启动成功：localhost:8000');
})