/*
 * @Description: 静态服务器.js
 * @Author: mTm
 * @Date: 2021-03-18 14:11:45
 * @LastEditTime: 2021-03-18 14:13:06
 * @LastEditors: mTm
 */
const Koa = require('koa')
const koaStatic = require('koa-static')

const app = new Koa();
app.use(koaStatic('./build'))

app.listen(8000, () => {
    console.log('koa启动成功');
    console.log('loaclhost: 8000');
})