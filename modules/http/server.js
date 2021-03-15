/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-15 09:03:49
 * @LastEditTime: 2021-03-15 10:51:59
 * @LastEditors: mTm
 */
const http = require('http')

// const server = http.createServer((req,res) => {
//     res.end('Hellow World')
// })


const server = new http.Server((req,res) => {
    res.write('123121')
    res.end('Hellow world')
})

server.listen(3000, () => {
    console.log('localhost:3000');
})