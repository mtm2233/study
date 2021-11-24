/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-11-17 23:22:03
 * @LastEditTime: 2021-11-25 00:03:38
 * @LastEditors: mTm
 */
const bf = require('./bf');
const rk = require('./rk');
const bm = require('./bm');
const kmp = require('./kmp');
const Trie = require('./Trie');

const main = 'ababassdbbsdnsbd';
const pattern = 'bab';
// 2 3 2 1
// 1 1 2 1

// console.log(bf(main, pattern));
// console.log(rk(main, pattern));
// console.log(bm(main, pattern));
// console.log(kmp(main, pattern));

// trie
const trie = new Trie();
new Array(
  'isdream',
  'cn',
  'hellow',
  'ma',
  'is666',
  'hhh',
  'he',
  'hel',
  'hell',
  'hello'
).forEach(str => trie.insert(str));
// console.log(trie.find('hellow'));
// console.log(trie.showAll('hel'));
console.log(trie.remove('hel', true));
console.log(trie.showAll('hel'));
