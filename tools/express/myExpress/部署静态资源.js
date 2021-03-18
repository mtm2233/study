/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-17 09:40:29
 * @LastEditTime: 2021-03-17 09:40:49
 * @LastEditors: mTm
 */
// staticResources.js
const express = require('express');

const app = express();

app.use(express.static('./build'))

app.listen(8000, () => {
    console.log('启动成功：localhost:8000');
})