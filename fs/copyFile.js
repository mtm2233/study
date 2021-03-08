/*
 * @Description: 拷贝文件
 * @Author: mTm
 * @Date: 2021-03-08 10:51:23
 * @LastEditTime: 2021-03-08 10:57:21
 * @LastEditors: mTm
 */
const { fs } = require('./config');
const oldFile = './files/file.txt';
const newFile = './mkdir1/file.txt';

if(fs.existsSync(oldFile) && !fs.existsSync(newFile)) {
    fs.copyFileSync(oldFile, newFile);
}