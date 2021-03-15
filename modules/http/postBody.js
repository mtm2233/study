/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-15 10:34:41
 * @LastEditTime: 2021-03-15 10:45:07
 * @LastEditors: mTm
 */
const http = require('http')

const server = new http.Server((req,res) => {
    req.setEncoding('utf-8')
    req.on('data',data => {
        console.log(data);
    })
    req.on("end",() =>{
        console.log("传输结束");
    })
    res.end("create user success")
})

server.listen(3000, () => {
    console.log('localhost:3000');
})