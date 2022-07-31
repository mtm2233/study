/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-07-29 20:15:30
 * @LastEditTime: 2022-07-29 20:38:40
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=747 lang=typescript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
function dominantIndex(nums: number[]): number {
  if (nums.length === 1) {
    return 0;
  }

  let first = 0;
  let second;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[first]) {
      second = first;
      first = i;
    } else if (second === undefined || nums[i] > nums[second]) {
      second = i;
    }
  }
  if (second === undefined || nums[first] >= nums[second] * 2) {
    return first;
  }
  return -1;
}
