/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-02-07 15:15:56
 * @LastEditTime: 2022-03-22 10:41:05
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (result > 0) {
      result = result + nums[i];
    } else {
      result = nums[i];
    }
    if (max < result) {
      max = result;
    }
  }
  return max;
};
// @lc code=end
