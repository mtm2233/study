/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-17 23:22:03
 * @LastEditTime: 2021-11-18 00:19:58
 * @LastEditors: mTm
 */
const bf = require('./bf')
const rk = require('./rk')

const main = 'a81131xc/c014568c1456'
const pattern = 'c1456'

console.log(bf(main, pattern));
console.log(rk(main, pattern));