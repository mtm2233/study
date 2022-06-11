/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-07 22:47:46
 * @LastEditTime: 2022-06-07 22:04:26
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n > 0 && (n & -n) === n
};
// @lc code=end

