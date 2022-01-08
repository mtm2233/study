/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-08 13:53:59
 * @LastEditTime: 2022-01-08 23:10:26
 * @LastEditors: mTm
 */
/* 散列表 */
// 实现⼀个基于链表法解决冲突问题的散列表
// const MapLinked = require('./MapLinked')
// const mapLinked = new MapLinked(10)
// mapLinked.set('abc', 'abc')
// mapLinked.set('1', '2')
// mapLinked.set('3', '4')
// mapLinked.set('5', '6')
// mapLinked.set('7', '8')

// console.log(mapLinked.remove('abc'));
// console.log(mapLinked.get('abc'));

// 实现⼀个LRU缓存淘汰算法
// 最近最少使用
// const LRU = require('./LRU');
// const lru = new LRU(5);

// lru.set(1, 1);
// lru.set(2, 2);
// lru.set(3, 3);
// lru.set(5, 5);
// lru.set(6, 6);
// lru.set(1, 1);

// // lru.set(5, 4);
// // lru.remove(6);
// // console.log(lru.get(6));
// console.log(lru.toString());

/* 字符串 */
// 实现⼀个字符集，只包含a〜z这26个英⽂字⺟的Trie树
// const Trie26 = require('./Trie26');
// const trie = new Trie26();
// trie.add('is');
// trie.add('isdream');
// trie.add('www');
// trie.add('isdreamcn');

// console.log(trie.search('is'));
// console.log(trie.find('isd'));
// console.log(trie);

// 实现朴素的字符串匹配算法
const bf = require('./bf');
console.log(bf('abcd', '123abcd'));