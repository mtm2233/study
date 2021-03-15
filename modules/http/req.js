/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-15 09:03:49
 * @LastEditTime: 2021-03-15 09:19:00
 * @LastEditors: mTm
 */
const http = require('http')

const server = new http.Server((req,res) => {
    const url = req.url;
    console.log(url);
    console.log(req.method);
    // console.log(req.headers);
    if(url === 'login') {
        res.end('Login')
    } else {
        res.end('Other')
    }
})

server.listen(3000, () => {
    console.log('localhost:3000');
})