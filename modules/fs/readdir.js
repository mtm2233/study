/*
 * @Description: 获得指定目录下，所有文件的列表
 * @Author: mTm
 * @Date: 2021-03-08 10:44:01
 * @LastEditTime: 2021-03-12 15:24:58
 * @LastEditors: mTm
 */
const { fs } = require('./config');
const file = '../../public/txt';
fs.readdir(file, (err,files) => {
    console.log(files); 
})