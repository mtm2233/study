/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-08-02 20:12:45
 * @LastEditTime: 2022-08-03 20:29:33
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=905 lang=typescript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    while (i < j && (nums[i] & 1) === 0) {
      i++;
    }
    while (j > i && (nums[j] & 1)) {
      j--;
    }

    if (i < j) {
      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
    }
    i++
    j--
  }
  return nums;
}
// @lc code=end
