/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-08-05 17:34:11
 * @LastEditTime: 2022-08-05 17:51:17
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  // return nums.map(num => num * num).sort((a, b) => a - b);
  let index = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      index = i
    }
    nums[i] *= nums[i]
  }

  for (let i = index; i >= 0; i--) {
    const sortNum = nums[i]
    let j = i + 1
    while (sortNum > nums[j] && j < nums.length) {
      nums[j - 1] = nums[j++]
    }
    nums[j - 1] = sortNum
  }
  return nums
}
// @lc code=end