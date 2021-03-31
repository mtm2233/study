/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-31 15:10:21
 * @LastEditTime: 2021-03-31 15:32:49
 * @LastEditors: mTm
 */
const fs = require('fs')
const path = require('path')

const Koa = require('koa')
const Router = require('koa-router')
const jwt = require('jsonwebtoken')

const app = new Koa();
const jwtRouter = new Router();

console.log(process.cwd());

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './key/private.key'))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './key/public.key'))

jwtRouter.get('/test', (ctx, next) => {
    const user = { id: 100, name: 'why'}
    const token = jwt.sign(user, PRIVATE_KEY, {
        expiresIn: 100, 
        algorithm: 'RS256'
    })
    ctx.body = token
})

jwtRouter.get('/test/:token', (ctx, next) => {
    try {
        const user = jwt.verify(ctx.params.token, PUBLIC_KEY, {
            algorithms: ['RS256']
        });
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