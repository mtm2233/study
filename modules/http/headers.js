/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-15 09:03:49
 * @LastEditTime: 2021-03-15 11:04:54
 * @LastEditors: mTm
 */
const http = require('http')
// content-type是这次请求携带的数据的类型：
// application/json表示是一个json类型；
// text/plain表示是文本类型；
// application/xml表示是xml类型；
// multipart/form-data表示是上传文件；
const server = new http.Server((req,res) => {
    // res.setHeader('content-type', 'text/plain')
    // res.statusCode = 400;
    // res.writeHead(200)
    res.writeHead(200, {
        'content-type': 'text/plain'
    })
    res.end('Hellow world')
})

server.listen(3000, () => {
    console.log('localhost:3000');
})