/*
 * @Description: 读取文件
 * @Author: mTm
 * @Date: 2021-03-08 10:21:46
 * @LastEditTime: 2021-03-08 10:50:11
 * @LastEditors: mTm
 */
const {fs, url} = require('./config');

fs.readFile(url, {encoding: 'utf-8'}, (err,content) => {
    console.log(content);
})