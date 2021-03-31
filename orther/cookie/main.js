/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-31 14:05:44
 * @LastEditTime: 2021-03-31 15:02:44
 * @LastEditors: mTm
 */
const Koa = require('koa')
const KoaSession = require('koa-session')

const cookieRouter = require('./cookie.router')
const sessionRouter = require('./session.router')

const app = new Koa();

const session = KoaSession({
    key: 'sessionId', // cookie的key
    maxAge: 100 * 1000, // 过期时间
    httpOnly: true, // 不允许通过js获取cookie
    rolling: true, // 每次响应时，刷新session的有效期
    silent: true // 是否运行signed前面认证，防止数据被篡改
}, app)

app.keys = ['abc']
app.use(session)

app.use(cookieRouter.routes())
app.use(cookieRouter.allowedMethods())
app.use(sessionRouter.routes())
app.use(sessionRouter.allowedMethods())

app.listen(8080, () => {
    console.log('服务器启动成功：localhost:8080');
})