/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-11 13:59:29
 * @LastEditTime: 2021-03-11 14:42:58
 * @LastEditors: mTm
 */
const message = "hellow"
const buffers1 = Buffer.from(message, 'utf16le')
const buffers2 = Buffer.from(message)

console.log(buffers1, buffers1.toString());
console.log(buffers2, buffers2.toString());
