/*
 * @Description: 参数解析formdata.js
 * @Author: mTm
 * @Date: 2021-03-18 13:54:52
 * @LastEditTime: 2021-03-18 13:58:10
 * @LastEditors: mTm
 */
const Koa = require('koa')
const multer = require('koa-multer')

const upload = multer()

const app = new Koa();

app.use(upload.any())

app.use((ctx,next) => {
    ctx.response.body = ctx.req.body
})

app.listen(8000, () => {
    console.log('koa启动成功');
    console.log('loaclhost: 8000');
})