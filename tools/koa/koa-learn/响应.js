/*
 * @Description: 响应.js
 * @Author: mTm
 * @Date: 2021-03-18 14:09:52
 * @LastEditTime: 2021-03-18 14:10:52
 * @LastEditors: mTm
 */
const Koa = require('koa')

const app = new Koa();

app.use((ctx,next) => {
    // 输出结果：body将响应主体设置为以下之一：
    // string ：字符串数据
    // Buffer ：Buffer数据
    // Stream ：流数据
    // Object|| Array：对象或者数组
    // null ：不输出任何内容
    // 如果response.status尚未设置，Koa会自动将状态设置为200或204。
    ctx.body = "Hellow Koa"
    ctx.status = 404
})

app.listen(8000, () => {
    console.log('koa启动成功');
    console.log('loaclhost: 8000');
})