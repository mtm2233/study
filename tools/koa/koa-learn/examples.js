/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-19 09:40:42
 * @LastEditTime: 2021-03-19 10:01:52
 * @LastEditors: mTm
 */
const Koa = require('koa')
// 参数解析-json-urlencoded
const bodyParser = require('koa-bodyparser')

// 错误
const failCodeMap = new Map([
    [400, { msg: '请求错误' }],
    [401, { msg: '未认证' }],
    [403, { msg: '无权限' }],
])

const app = new Koa();

const newsRouter = require('./routers/news')

app.use(bodyParser());
app.use(newsRouter.routes())

app.on('error', (errcode,ctx) => {
    ctx.status = errcode;
    ctx.body = {
        status: errcode,
        message: failCodeMap.get(errcode)?.msg || '未知错误'
    }
})

app.listen(8000, () => {
    console.log('koa启动成功');
    console.log('loaclhost: 8000');
})