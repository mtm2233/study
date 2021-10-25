/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-23 17:52:35
 * @LastEditTime: 2021-10-25 10:23:44
 * @LastEditors: mTm
 */
const HashMap = require('./HashMap')
const LinkHashMap = require('./LinkHashMap')
const LRU = require('./LRU')

// **HashMap**

// const hashMap = new HashMap({
//   factor: 0.75,
//   nums: 4
// })

// new Array('哈哈', 'abc', '123456', '9527a', '马', '马1').forEach(v => hashMap.set(v))
// new Array('哈哈', 'abc', '123456', '9527a', '马', '马1').forEach(v => hashMap.remove(v))
// new Array('哈哈', 'abc', '123456', '9527a', '马', '马1').forEach(v => hashMap.set(v))
// hashMap.remove('哈哈')
// hashMap.set('哈哈')
// hashMap.remove('哈哈')
// hashMap.set('哈哈')


// console.log(hashMap.get('哈哈'));

// console.log(hashMap.remove('abc'));

// console.log(hashMap.map);

// **LinkHashMap**

// const linkHashMap = new LinkHashMap({
//   factor: 0.75,
//   nums: 4
// })
// new Array('哈哈', 'abc', '123456', '9527a', '马', '马1').forEach(v => linkHashMap.set(v))
// new Array('哈哈', 'abc', '123456', '9527a', '马', '马1').forEach(v => linkHashMap.remove(v))
// new Array('哈哈', 'abc', 123456, '9527a', '马', '马1').forEach(v => linkHashMap.set(v))

// linkHashMap.set(123456)
// linkHashMap.set(123456, 1234567)
// console.log(linkHashMap.remove(123456));
// console.log(linkHashMap.get(123456));

// LRU
const lru = new LRU({
  factor: 0.75,
  nums: 4,
  maxNums: 8
})

new Array(...'isdream.cn123456789').forEach(char => lru.set(char))
// new Array(...'isdream.c').forEach(char => lru.remove(char))

// console.log(lru.allNode());

// console.log(lru.remove('i'));
// console.log(lru.remove('s'));
// // console.log(lru.remove('d'));
// console.log(lru);
console.log(lru.allNode());