/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-18 13:44:18
 * @LastEditTime: 2021-03-18 13:46:51
 * @LastEditors: mTm
 */
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa();
const userRouter = new Router({prefix: '/user'});

userRouter.get('/', (ctx, next) => {
    ctx.body = {
        query: ctx.query
    }
})

userRouter.get('/:id', (ctx, next) => {
    ctx.body = {
        query: ctx.query,
        params: ctx.params
    }
})

app.use(userRouter.routes())

app.listen(8000, () => {
    console.log('koa启动成功');
    console.log('loaclhost: 8000');
})