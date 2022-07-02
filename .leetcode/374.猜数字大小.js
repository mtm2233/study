/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-28 22:14:25
 * @LastEditTime: 2022-06-28 22:17:53
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let low = 1;
  let high = n;
  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    const res = guess(mid);
    if (res === 0) {
      return mid;
    }
    if (res === 1) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false
};
// @lc code=end
