/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-17 11:14:52
 * @LastEditTime: 2021-03-18 13:23:44
 * @LastEditors: mTm
 */
const Koa = require('koa')

const app = new Koa();

app.use((ctx,next) => {
    // console.log(ctx.request);
    ctx.response.body = "Hellow Koa"
})

app.listen(8000, () => {
    console.log('koa启动成功');
    console.log('loaclhost: 8000');
})