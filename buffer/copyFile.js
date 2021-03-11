/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-11 14:23:24
 * @LastEditTime: 2021-03-11 14:59:20
 * @LastEditors: mTm
 */
const fs = require('fs')

fs.readFile('./test.txt', (err,data) => {
    console.log(data, data.toString());
    fs.writeFile('./testCopy.txt', data, (err) => {
        console.log(err);
    })
})

fs.readFile('./pkq.jpg', (err,data) => {
    console.log(data);
    fs.writeFile('./demo.png', data, (err) => {
        console.log(err);
    })
})