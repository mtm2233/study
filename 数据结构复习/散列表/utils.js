/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-23 18:38:41
 * @LastEditTime: 2021-10-23 20:08:34
 * @LastEditors: mTm
 */
// @see https://blog.csdn.net/xavierqwb/article/details/71843622=

function hashIndex(key, nums) {
  key = `${key}`
  let count = 0
  for (let i = 0; i < key.length; i++) {
    count += key[i].charCodeAt() * (i + 1)
  }
  // 位与也是可以用来取余的，但是有一个条件：除数必须是2的n次幂才行。举例子来说明：
  // 9%8=1
  // 1001 &（1000 - 1）
  // =1001 & 0111
  // =1 // 1001是9的二进制表示，1000是8的二进制表示
  return (count ^ (count >> 16)) & (nums - 1)
}

module.exports = {
  hashIndex
}