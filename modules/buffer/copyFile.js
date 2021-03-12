/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-11 14:23:24
 * @LastEditTime: 2021-03-12 15:28:42
 * @LastEditors: mTm
 */
const fs = require('fs')

fs.readFile('../../public/txt/test.txt', (err,data) => {
    console.log(data, data.toString());
    fs.writeFile('../../public/txt/testCopy.txt', data, (err) => {
        console.log(err);
    })
})

fs.readFile('../../public/img/pkq.jpg', (err,data) => {
    console.log(data);
    fs.writeFile('../../public/img/demo.png', data, (err) => {
        console.log(err);
    })
})