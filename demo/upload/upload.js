/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-15 17:31:28
 * @LastEditTime: 2021-03-15 22:00:54
 * @LastEditors: mTm
 */
const http = require('http');
const qs = require('querystring');
const fs = require('fs');

const server = new http.Server((req,res) => {
    // 图片文件必须设置为二进制
    req.setEncoding('binary');
    // 获取content-type中的boundary的值
    const boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '');

    // 记录当前数据的信息
    const fileSize = req.headers['content-length']
    let curSize = 0;
    let body = '';

    // 监听当前的数据
    req.on('data',data => {
        curSize += data.length;
        res.write(`文件上传进度：${curSize/fileSize * 100}%\n`);
        body += data;
    })

    // 数据结构
    req.on('end', () => {
        // 切割数据
        const payload = qs.parse(body, "\r\n", ": ");
        // 获取最后的类型(image/png)
        const filetype = payload["Content-Type"];
        // 获取要截取的长度
        const fileTypePosition = body.indexOf(filetype) + filetype.length;
        let binaryData = body.substring(fileTypePosition);
        binaryData = binaryData.replace(/^\s\s*/, '');

        const finalData = binaryData.substring(0, binaryData.indexOf(`--${boundary}--`));

        fs.writeFile('./boo.png',finalData, 'binary', err => {
            console.log(err);
            res.end('文件上传完成~')
        })
    })

})

server.listen(3000,() => {
    console.log('服务器启动成功：localhost:3000');
})