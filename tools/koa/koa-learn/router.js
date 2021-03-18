/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-18 13:30:28
 * @LastEditTime: 2021-03-18 13:43:41
 * @LastEditors: mTm
 */
const Koa = require('koa');
const Router = require('koa-router')

const app = new Koa();

const userRouter = new Router({prefix: '/user'})

userRouter.get('/', (ctx,next) => {
    ctx.body = {
        users: ['abc','cba','11'],
    }
})

userRouter.post('/', (ctx,next) => {
    ctx.body = {
        message: '添加用户成功~'
    }
})

app.use(userRouter.routes());
// 判断某一个method是否支持
app.use(userRouter.allowedMethods())

app.listen(8000, () => {
    console.log('koa启动成功');
    console.log('loaclhost: 8000');
})