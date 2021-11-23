/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-17 23:22:03
 * @LastEditTime: 2021-11-23 21:40:07
 * @LastEditors: mTm
 */
const bf = require('./bf')
const rk = require('./rk')
const bm = require('./bm')
const kmp = require('./kmp')

const main = 'ababassdbbsdnsbd'
const pattern = 'bab'
// 2 3 2 1
// 1 1 2 1

// console.log(bf(main, pattern));
// console.log(rk(main, pattern));
// console.log(bm(main, pattern));
console.log(kmp(main, pattern));