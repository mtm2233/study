/*
 * @Description: multer上传文件
 * @Author: mTm
 * @Date: 2021-03-18 14:00:02
 * @LastEditTime: 2021-03-18 14:08:36
 * @LastEditors: mTm
 */
const path = require('path')

const Koa = require('koa')
const Router = require('koa-router')
const multer = require('koa-multer')


const app = new Koa();
const uploadRouter = new Router({prefix: '/upload'})
const storage = multer.diskStorage({
    destination(req,file,cb) {
        cb(null, './uploads/')
    },
    filename(req,file,cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage
})

uploadRouter.post('/', upload.single('file'), (ctx,next) => {
    ctx.body = {
        file: ctx.req.file,
        message: '图片上传成功'
    }
})

app.use(uploadRouter.routes())

app.listen(8000, () => {
    console.log('koa启动成功');
    console.log('loaclhost: 8000');
})