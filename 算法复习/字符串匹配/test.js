/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-11-17 23:22:03
 * @LastEditTime: 2021-11-28 19:35:35
 * @LastEditors: mTm
 */
const bf = require('./bf');
const rk = require('./rk');
const bm = require('./bm');
const kmp = require('./kmp');
const Trie = require('./Trie');
const AC = require('./AC');

const main = 'ababassdbbsdnsbd';
const pattern = 'bab';
// 2 3 2 1
// 1 1 2 1

// console.log(bf(main, pattern));
// console.log(rk(main, pattern));
// console.log(bm(main, pattern));
// console.log(kmp(main, pattern));

// trie
// const trie = new Trie();
// new Array(
//   'isdream',
//   'cn',
//   'hellow',
//   'ma',
//   'is666',
//   'hhh',
//   'he',
//   'hel',
//   'hell',
//   'hello'
// ).forEach(str => trie.insert(str));
// // console.log(trie.find('hellow'));
// // console.log(trie.showAll('hel'));
// console.log(trie.remove('hel', true));
// console.log(trie.showAll('hel'));


// AC自动机
const ac = new AC();
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
).forEach(str => ac.insert(str));
// console.log(trie.find('hellow'));
// console.log(trie.showAll('hel'));
// console.log(ac.remove('hel', true));
// console.log(ac.showAll('hel'));

ac.buildFail()
const str = ac.filter('he123ll124ma56isdream;666')
console.log(str);