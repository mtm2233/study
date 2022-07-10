/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-08 21:55:53
 * @LastEditTime: 2022-07-08 21:10:32
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const arr1 = version1.split('.')
  const arr2 = version2.split('.')

  const len = Math.max(arr1.length, arr2.length)
  for (let i = 0; i < len; i++) {
    const num1 = Number(arr1[i] || 0)
    const num2 = Number(arr2[i] || 0)
    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
};
// @lc code=end

