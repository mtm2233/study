/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-27 21:17:17
 * @LastEditTime: 2022-06-27 21:47:56
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let low = 1;
  let high = (num >> 1) + 1;
  while (low <= high) {
    // 防止 low + high 越界
    const mid = low + ((high - low) >> 1)
    // 防止 mid * mid 越界
    const k = num / mid
    if (k === mid) {
      return true
    }
    if (k > mid) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  
  return false
};
// @lc code=end