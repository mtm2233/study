/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-16 19:35:20
 * @LastEditTime: 2022-06-16 19:55:34
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for (let i = 0, k = 0; i < nums.length; i++) {
    if (nums[i]) {
      if (k !== i) {
        nums[k] = nums[i]
        nums[i] = 0
      }
      k++
    }
  }
  return nums
};
// @lc code=end

