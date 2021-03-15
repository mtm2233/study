/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-15 09:03:49
 * @LastEditTime: 2021-03-15 10:32:14
 * @LastEditors: mTm
 */
const http = require('http')

const server = new http.Server((req,res) => {
    if (req.headers.referer) {
        const myURL = new URL(req.headers.referer);
        console.log(myURL);
        console.log(myURL.searchParams);
    }
    res.end('H')
})

server.listen(3000, () => {
    console.log('localhost:3000');
})