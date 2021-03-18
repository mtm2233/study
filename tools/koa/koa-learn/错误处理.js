/*
 * @Description: 错误处理.js
 * @Author: mTm
 * @Date: 2021-03-18 14:14:04
 * @LastEditTime: 2021-03-18 14:16:54
 * @LastEditors: mTm
 */
const Koa = require('koa')

const app = new Koa();

const failCodeMap = new Map([
    [400, { msg: '请求错误' }],
    [401, { msg: '未认证' }],
    [403, { msg: '无权限' }],
])

app.use((ctx,next) => {
    ctx.app.emit('error', 404, ctx)
})

app.on('error', (errcode,ctx) => {
    ctx.status = errcode;
    ctx.body = failCodeMap.get(errcode)?.msg || '未知错误'
})

app.listen(8000, () => {
    console.log('koa启动成功');
    console.log('loaclhost: 8000');
})