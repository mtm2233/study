/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-19 09:18:19
 * @LastEditTime: 2021-03-19 09:32:38
 * @LastEditors: mTm
 */
const path = require('path')

const express = require('express');
// 解析formdata 一般用于图片上传
const multer = require('multer');

const newsRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "upload/")
    },
    filename(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage
});

newsRouter.get('/:id',(req,res,next) => {
    res.json({
        query: req.query,
        params: req.params
    })
})

// 解析json-urlencoded-formdata
newsRouter.post('/formdata',upload.any(),(req,res,next) => {
    res.json(req.body)
})

// 图片上传
newsRouter.post('/upload', upload.single('file'), (req,res,next) => {
    console.log(req.file);
    // 设置状态码
    res.status(201);
    res.end('图片上传成功')
})

newsRouter.use('/error', (req,res,next) => {
    next({
        status: 404
    })
})

module.exports = newsRouter