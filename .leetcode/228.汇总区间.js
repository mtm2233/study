/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-07 20:22:49
 * @LastEditTime: 2022-06-07 20:45:44
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const len = nums.length
  if (!len) {
    return []
  }
  const sections = []

  let start = null
  let end = null
  end = start = nums[0]

  for (let i = 1; i <= len; i++) {
    const num = nums[i]
    if (num - end === 1) {
      end = num
    } else {
      if (start === end) {
        sections.push(start.toString())
      } else {
        sections.push(`${start}->${end}`)
      }
      end = start = num
    }
  }

  return sections
};
// @lc code=end

