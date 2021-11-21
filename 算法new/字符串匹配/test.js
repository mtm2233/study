/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-17 23:22:03
 * @LastEditTime: 2021-11-21 13:21:31
 * @LastEditors: mTm
 */
const bf = require('./bf')
const rk = require('./rk')
const bm = require('./bm')

const main = 'ababassdbbsdnsbd'
const pattern = 'bab'
// 2 3 2 1
// 1 4 2 1

// console.log(bf(main, pattern));
// console.log(rk(main, pattern));
console.log(bm(main, pattern));