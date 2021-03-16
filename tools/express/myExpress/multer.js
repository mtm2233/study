/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-16 17:36:52
 * @LastEditTime: 2021-03-16 17:47:41
 * @LastEditors: mTm
 */
const path = require('path')

const express = require('express');
const multer = require('multer');

const app = express();

// const upload = multer({
//     dest: 'upload/'
// })
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
})

app.post('/upload', upload.array('file'), (req,res,next) => {
    // console.log(req.file);
    console.log(req.files);
    res.end('图片上传成功')
})

app.listen(8000, () => {
    console.log('启动成功：localhost:8000');
})