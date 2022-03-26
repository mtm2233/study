/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-03-25 13:06:30
 * @LastEditTime: 2022-03-25 13:18:09
 * @LastEditors: mTm
 */
const bbb = require('./bbb')
console.log('aaa.js执行了', bbb.name);
const name = 'aaa'

module.exports = {
  name
}