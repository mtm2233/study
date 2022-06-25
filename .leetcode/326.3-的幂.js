/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-20 22:07:03
 * @LastEditTime: 2022-06-20 22:27:45
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  // let _n = 1;
  // while (_n <= n) {
  //   if (_n === n) {
  //     return true
  //   }
  //   _n *= 3
  // }
  // return false
  return /^10*$/.test(n.toString(3));
};
// @lc code=end

