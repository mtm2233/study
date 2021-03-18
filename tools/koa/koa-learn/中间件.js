/*
 * @Description: 中间件
 * @Author: mTm
 * @Date: 2021-03-18 13:18:21
 * @LastEditTime: 2021-03-18 13:28:47
 * @LastEditors: mTm
 */
const Koa = require('koa')

const app = new Koa();

app.use((ctx,next) => {
    if(ctx.request.url === '/login') {
        if (ctx.request.method === "POST") {
            ctx.body = '登录成功~'
        } else {
            ctx.body = '不支持改请求方式'
        } 
    }
    console.log(ctx.request);
    next();
})

app.use((ctx,next) => {
    console.log(123);
})

app.listen(8000, () => {
    console.log('koa启动成功');
    console.log('loaclhost: 8000');
})