/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-17 09:05:55
 * @LastEditTime: 2021-03-17 09:25:33
 * @LastEditors: mTm
 */
const express = require('express')
const multer = require('multer')
const upload = multer()

const userRouter = express.Router();

userRouter.post('/', upload.any(), (req, res, next) => {
    res.json(req.body)
})

userRouter.get('/', (req, res, next) => {
    res.end('获取用户信息')
})

userRouter.delete('/:id', (req, res, next) => {
    res.json({
        id: req.params.id,
        message: '删除用户成功'
    })
})

module.exports = userRouter