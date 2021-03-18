/*
 * @Description: 参数解析-json.js
 * @Author: mTm
 * @Date: 2021-03-18 13:49:52
 * @LastEditTime: 2021-03-18 13:54:34
 * @LastEditors: mTm
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa();

app.use(bodyParser())

// 参数解析-json-urlencoded
app.use((ctx,next) => {
    ctx.body = ctx.request.body;
})

app.listen(8000, () => {
    console.log('koa启动成功');
    console.log('loaclhost: 8000');
})