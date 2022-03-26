/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-03-25 13:06:37
 * @LastEditTime: 2022-03-25 13:09:22
 * @LastEditors: mTm
 */
const aaa = require('./aaa')
console.log('bbb.js执行了', aaa.name);
const name = 'bbb'

module.exports = {
  name
}