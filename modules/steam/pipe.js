/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-12 14:19:31
 * @LastEditTime: 2021-03-12 15:27:04
 * @LastEditors: mTm
 */
const fs = require('fs')
const reader = fs.createReadStream('../../public/txt/steam/foo.txt');
const writer = fs.createWriteStream('../../public/txt/steam/foo.txt');
reader.pipe(writer)