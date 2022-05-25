/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-05-24 09:11:54
 * @LastEditTime: 2022-05-24 09:39:29
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const hasNum = {};

  for (const num of nums) {
    hasNum[num] = (hasNum[num] || 0) + 1;
  }

  for (const key in hasNum) {
    if (hasNum[key] === 1) {
      return key;
    }
  }
};
// @lc code=end
