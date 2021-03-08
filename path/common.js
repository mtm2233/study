/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-08 09:06:24
 * @LastEditTime: 2021-03-08 09:52:33
 * @LastEditors: mTm
 */
const path = require('path');
const baseUrl = __dirname;
const url = './test/test.txt'

// console.log(path.dirname(url));
// console.log(path.basename(url));
// console.log(path.extname(url));

console.log(path.join('/a', '/b'));
console.log(path.resolve('/a', './b'));
// path.resolve总是返回一个以相对于当前的工作目录（working directory）的绝对路径
console.log(path.resolve(url));