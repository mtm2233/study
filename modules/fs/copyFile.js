/*
 * @Description: 拷贝文件
 * @Author: mTm
 * @Date: 2021-03-08 10:51:23
 * @LastEditTime: 2021-03-12 15:24:38
 * @LastEditors: mTm
 */
const { fs } = require('./config');
const oldFile = '../../public/txt/file.txt';
const newFile = '../../public/txt/mkdir1/file.txt';

if(fs.existsSync(oldFile) && !fs.existsSync(newFile)) {
    fs.copyFileSync(oldFile, newFile);
}