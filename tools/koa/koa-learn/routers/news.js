/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-19 09:40:56
 * @LastEditTime: 2021-03-19 10:02:11
 * @LastEditors: mTm
 */
const path = require('path')

const Router = require('koa-router')
// 参数解析formdata
const multer = require('koa-multer')

const storage = multer.diskStorage({
    destination(req,file,cb) {
        cb(null, './uploads/')
    },
    filename(req,file,cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const newsRouter = new Router({prefix: '/news'})
const upload = multer({
    storage
})

newsRouter.get('/:id', (ctx,next) => {
    ctx.body = {
        query: ctx.query,
        params: ctx.params,
    }
})

newsRouter.post('/', (ctx,next) => {
    ctx.body = ctx.request.body;
})

newsRouter.post('/formdata', upload.any(), (ctx,next) => {
    ctx.body = ctx.req.body;
})

newsRouter.post('/upload', upload.single('file'), (ctx,next) => {
    ctx.body = {
        file: ctx.req.file,
        message: '图片上传成功'
    }
})

newsRouter.post('/error', (ctx,next) => {
    ctx.app.emit('error', 403, ctx)
})

module.exports = newsRouter;