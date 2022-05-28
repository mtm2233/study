/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-05-28 23:11:26
 * @LastEditTime: 2022-05-28 23:36:16
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 摩尔投票法
pairing阶段：两个不同选票的人进行对抗，并会同时击倒对方，当剩下的人都是同一阵营，相同选票时，结束。
counting阶段：计数阶段，对最后剩下的下进行选票计算统计，判断选票是否超过总票数的一半，选票是否有效。 */
var majorityElement = function(nums) {
  let count = 0;
  let num = null;
  const len = nums.length;
  const middle = len/2
  for (let i = 0; i < len; i++) {
    if (count > middle) {
      return num
    }
    if (!count) {
      num = nums[i]
      count = 1
    } else if (num === nums[i]) {
      count++
    } else {
      count--
    }
  }

  return count ? num : null;
};
// @lc code=end