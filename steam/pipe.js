/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-12 14:19:31
 * @LastEditTime: 2021-03-12 14:20:30
 * @LastEditors: mTm
 */
const fs = require('fs')
const reader = fs.createReadStream('./txts/foo.txt');
const writer = fs.createWriteStream('./txts/foz.txt');
reader.pipe(writer)