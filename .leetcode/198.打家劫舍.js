/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-07-13 21:46:48
 * @LastEditTime: 2022-07-13 21:55:50
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length <= 2) {
    return Math.max(nums[0], nums[1] || 0);
  }

  let max1 = nums[0]
  let max2 = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    const temp = Math.max(max1 + nums[i], max2)
    max1 = max2
    max2 = temp
  }
  
  return max2;
};
// @lc code=end