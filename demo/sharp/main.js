/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-11 14:53:24
 * @LastEditTime: 2021-03-11 14:57:10
 * @LastEditors: mTm
 */
const fs = require('fs')
const sharp = require('sharp')

sharp('../../public/img/pkq.jpg').resize(100,100).rotate(45).toBuffer().then(data => {
    console.log(data);
    fs.writeFileSync('./small.png',data)
})