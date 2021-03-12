/*
 * @Description: 新建一个文件夹
 * @Author: mTm
 * @Date: 2021-03-08 10:32:13
 * @LastEditTime: 2021-03-12 15:24:25
 * @LastEditors: mTm
 */
const { mkdirSync } = require('fs');
const { fs } = require('./config');
const file = '../../public/mkdir';

if(!fs.existsSync(file)) {
    fs.mkdir(file, err => {
        console.log(err);
    })
}

