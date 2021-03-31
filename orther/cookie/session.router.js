/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-31 14:08:35
 * @LastEditTime: 2021-03-31 14:38:01
 * @LastEditors: mTm
 */
const Router = require('koa-router')

const cookieRouter = new Router({prefix: '/session'})

cookieRouter.get('/test',(ctx,next) => {
    ctx.session.user = {
        id: 123,
        name: 'koa-session'
    }
    ctx.body = 'session设置成功'
})

cookieRouter.get('/demo',(ctx,next) => {
    const user = ctx.session.user
    ctx.body = user
    console.log(user);
})

module.exports = cookieRouter