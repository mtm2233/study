/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-06 21:12:44
 * @LastEditTime: 2022-07-06 21:37:30
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  const _high = nums.length - 1
  // 前面
  let low = 0
  let high = _high
  // 后面
  let endLow = 0
  let endHigh = _high

  // 获取第一个等于target元素的下标
  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    const num = nums[mid]
    if (num === target) {
      endLow = endLow || mid
      if (mid === 0 || nums[mid - 1] !== target) {
        low = mid
        break
      } else {
        high = mid - 1
      }
    } else if (num < target) {
      low = mid + 1
    } else {
      high = mid - 1
      endHigh = high
    }
  }

  // 没有找到
  if (low > high) {
    return [-1, -1]
  }
  // target只出现一次
  if (nums[low + 1] !== target) {
    return [low, low]
  }

  // 获取最后一个等于target元素的下标
  while (endLow <= endHigh) {
    const mid = endLow + ((endHigh - endLow) >> 1);
    const num = nums[mid]

    if (num === target) {
      if (mid === _high || nums[mid + 1] !== target) {
        endLow = mid
        break
      } else {
        endLow = mid + 1
      }
    } else if (num < target) {
      endLow = mid + 1
    } else {
      endHigh = mid - 1
    }
  }

  return [low, endLow]
};
// @lc code=end