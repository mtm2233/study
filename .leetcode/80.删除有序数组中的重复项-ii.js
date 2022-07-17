/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-15 19:15:22
 * @LastEditTime: 2022-07-15 19:29:01
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let k = 0
  let index = null
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[index]) {
      index = i
    }
    if (i - index < 2) {
      if (k !== i) {
        nums[k] = nums[i]
      }
      k++
    }
  }

  return k
};
// @lc code=end
// removeDuplicates([0,0,1,1,1,1,2,3,3])

