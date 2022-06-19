/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-06-14 19:10:20
 * @LastEditTime: 2022-06-14 19:28:02
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) {
    return false;
  }
  while (n % 5 === 0) {
    n /= 5;
  }
  while (n % 3 === 0) {
    n /= 3;
  }
  while (n % 2 === 0) {
    n = n >> 1;
  }
  return n === 1;
};
// @lc code=end
