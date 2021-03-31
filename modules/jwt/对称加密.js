/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-31 15:10:21
 * @LastEditTime: 2021-03-31 15:22:10
 * @LastEditors: mTm
 */
const Koa = require('koa')
const Router = require('koa-router')
const jwt = require('jsonwebtoken')

const app = new Koa();
const jwtRouter = new Router();

const TOKEN = "aaa"

jwtRouter.get('/test', (ctx, next) => {
    const user = { id: 100, name: 'why'}
    const token = jwt.sign(user, TOKEN, {expiresIn: 100})
    ctx.body = token
})

jwtRouter.get('/test/:token', (ctx, next) => {
    try {
        const user = jwt.verify(ctx.params.token, TOKEN);
        ctx.body = user
    } catch(error) {
        ctx.body = error
    }
})

app.use(jwtRouter.routes());
app.use(jwtRouter.allowedMethods())

app.listen(8080, () => {
    console.log('服务器启动成功：localhost:8080');
})