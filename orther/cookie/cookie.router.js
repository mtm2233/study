/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-31 14:08:35
 * @LastEditTime: 2021-03-31 14:20:01
 * @LastEditors: mTm
 */
const Router = require('koa-router')

const cookieRouter = new Router({prefix: '/cookie'})

cookieRouter.get('/test',(ctx,next) => {
    ctx.cookies.set("name", "koa-cookie", {
        maxAge: 10 * 1000
    })
    ctx.body = 'cookie设置成功'
})

cookieRouter.get('/demo',(ctx,next) => {
    const cookie = ctx.cookies.get("name")
    if (cookie) {
        ctx.body = cookie
    }
    ctx.body = '没有设置cookie'
})

module.exports = cookieRouter