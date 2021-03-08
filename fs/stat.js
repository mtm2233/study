/*
 * @Description: 文件描述符
 * @Author: mTm
 * @Date: 2021-03-08 10:11:53
 * @LastEditTime: 2021-03-08 10:50:26
 * @LastEditors: mTm
 */

const {fs, url} = require('./config');

// 同步
// console.log(fs.statSync(url));
// console.log('执行后续代码');

// 异步(函数)
// fs.stat(url, (err, state) => {
//     if (!err) {
//         console.log(state);
//     }
// })
// console.log('执行后续代码');

// 异步(Promise) 
fs.promises.stat(url).then(state => {
    console.log(state);
}).catch(err => {
    console.log(err);
})
console.log('执行后续代码');