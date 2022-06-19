/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-18 21:41:37
 * @LastEditTime: 2022-06-19 11:20:29
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  // 巴什博奕，n%(m+1)!=0时，先手总是会赢的
  return n % 4 !== 0
};
// @lc code=end

