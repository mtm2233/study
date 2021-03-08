/*
 * @Description: 新建一个文件夹
 * @Author: mTm
 * @Date: 2021-03-08 10:32:13
 * @LastEditTime: 2021-03-08 10:46:37
 * @LastEditors: mTm
 */
const { fs } = require('./config');
const file = './mkdir';

if(!fs.existsSync(file)) {
    fs.mkdir(file, err => {
        console.log(err);
    })
}

