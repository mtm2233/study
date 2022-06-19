/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-14 20:23:23
 * @LastEditTime: 2022-06-14 20:27:02
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const len = nums.length;
  const hasNumArr = new Array(len + 1)
  for (let i = 0; i < len; i++) {
    hasNumArr[nums[i]] = true
  }

  for (let i = 0; i < len + 1; i++) {
    if (!hasNumArr[i]) {
      return i
    }
  }
};
// @lc code=end

