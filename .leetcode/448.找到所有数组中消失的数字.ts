/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-08-07 16:52:50
 * @LastEditTime: 2022-08-07 16:59:54
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=448 lang=typescript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  // [1, 1] => [-1, 1]
  // 将所有正数作为数组下标，置对应数组值为负值。那么，仍为正数的位置即为（未出现过）消失的数字
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    nums[index] = -Math.abs(nums[index]);
  }

  const dist: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      dist.push(i + 1);
    }
  }

  return dist
}
// @lc code=end
