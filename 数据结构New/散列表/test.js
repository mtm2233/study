/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-23 17:52:35
 * @LastEditTime: 2021-10-24 19:54:39
 * @LastEditors: mTm
 */
const HashMap = require('./HashMap')
const LinkHashMap = require('./LinkHashMap')

// **HashMap

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

// LinkHashMap

const linkHashMap = new LinkHashMap({
  factor: 0.75,
  nums: 4
})
// new Array('哈哈', 'abc', '123456', '9527a', '马', '马1').forEach(v => linkHashMap.set(v))
// new Array('哈哈', 'abc', '123456', '9527a', '马', '马1').forEach(v => linkHashMap.remove(v))
// new Array('哈哈', 'abc', 123456, '9527a', '马', '马1').forEach(v => linkHashMap.set(v))

linkHashMap.set(123456)
linkHashMap.set(123456, 1234567)
// console.log(linkHashMap.remove(123456));
console.log(linkHashMap.get(123456));