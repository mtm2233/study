/*
 * @Description: 文件描述符
 * @Author: mTm
 * @Date: 2021-03-08 10:19:39
 * @LastEditTime: 2021-03-08 10:45:56
 * @LastEditors: mTm
 */
const {fs, url} = require('./config');

fs.open(url, 'r', (err, fd) => {
    console.log(fd);
})