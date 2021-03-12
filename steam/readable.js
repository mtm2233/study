/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-12 13:23:57
 * @LastEditTime: 2021-03-12 14:09:18
 * @LastEditors: mTm
 */
const fs = require('fs');

const read = fs.createReadStream('./txts/foo.txt', {
    start: 1,
    highWaterMark: 2,
})

read.on('open',(fd) => {
    console.log(fd, '文件打开');
})

read.on('data', (data) => {
    console.log(data);
    
    read.pause();

    setTimeout(() => {
        read.resume();
    }, 1000);
})

read.on('end',() => {
    console.log('文件读取结束');
})

read.on('close',() => {
    console.log('文件关闭');
})