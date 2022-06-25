/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-22 21:29:53
 * @LastEditTime: 2022-06-22 21:30:26
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  return /^10*$/.test(n.toString(4));
};
// @lc code=end

