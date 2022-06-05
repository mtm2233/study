/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-04 23:42:07
 * @LastEditTime: 2022-06-05 17:51:16
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 时间 O(n * n) 空间 O(1)
// var containsNearbyDuplicate = function(nums, k) {
//   const len = nums.length;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = 1; j <= k && i + j < len; j++) {
//       if (nums[i] === nums[j + i]) {
//         return true
//       }
//     }
//   }
//   return false
// };
// O(n) 空间 O(n)
var containsNearbyDuplicate = function(nums, k) {
  const len = nums.length;
  const set = new Set()
  for (let i = 0; i < len; i++) {
    if (i > k) {
      set.delete(nums[i - k - 1])
    }
    const preSize = set.size;
    set.add(nums[i])
    if (set.size === preSize) {
      return true
    }
  }
  return false
};
// @lc code=end