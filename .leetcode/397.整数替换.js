/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-22 19:40:17
 * @LastEditTime: 2022-07-22 20:23:52
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
  const numMap = new Map()
  let minCount = Number.MAX_SAFE_INTEGER;
  function integerReplacement_c(num, count) {
    if (num === 1 || num === -1) {
      if (minCount > count) {
        minCount = count
      }
      return
    }
    const _count = numMap.get(num)
    if (_count && _count <= count) {
      return
    }
    numMap.set(num, count)

    if (num % 2 === 0) {
      // 2147483649 >> 1 === -1073741824
      integerReplacement_c(num >> 1, count + 1)
    } else {
      integerReplacement_c(num - 1, count + 1)
      integerReplacement_c(num + 1, count + 1)
    }
  }

  integerReplacement_c(n, 0)
  return minCount
};
// @lc code=end

// console.log(integerReplacement(2147483647));
