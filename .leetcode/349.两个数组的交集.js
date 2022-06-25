/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-25 13:23:12
 * @LastEditTime: 2022-06-25 13:33:02
 * @LastEditors: mTm
 */
/*+
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const nums1Obj = {}
  const nums2Obj = {}
  nums1.forEach(num => nums1Obj[num] = true)
  nums2.forEach(num => {
    if (nums1Obj[num]) {
      nums2Obj[num] = true
    }
  })

  return Object.keys(nums2Obj)
};
// @lc code=end

