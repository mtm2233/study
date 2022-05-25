/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-12-23 16:59:36
 * @LastEditTime: 2021-12-23 16:59:36
 * @LastEditors: mTm
 */
const BitMap = require('./BitMap')

const bitmap = new BitMap(32)

bitmap.set(20)
bitmap.set(5)
bitmap.set(-1)
bitmap.del(-1)
console.log(bitmap.get(20));
console.log(bitmap.get(5));
console.log(bitmap.get(-1));
console.log(bitmap);