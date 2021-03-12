/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-03-12 14:09:55
 * @LastEditTime: 2021-03-12 14:19:13
 * @LastEditors: mTm
 */
const fs = require("fs");
const writer = fs.createWriteStream("./txts/foz.txt");

writer.on("open", fd => {
  console.log(fd, "文件打开");
});

writer.write("123", err => {
    console.log(err, '写入成功');
});

writer.write("321", err => {
    console.log(err, '写入成功');
});

// write传入的数据和调用close方法；
writer.end('abcba', err => {
    console.log('end');
})
// 关闭文件
// writer.close();

writer.on('finish', () => {
    console.log('文件写入结束');
})

writer.on('close', () => {
    console.log('文件关闭');
})