/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-27 21:12:37
 * @LastEditTime: 2022-06-27 21:16:59
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const numsMap = {};
  nums1.forEach(num => (numsMap[num] = (numsMap[num] || 0) + 1));

  const unionNum = [];
  nums2.forEach(num => {
    if (numsMap[num]) {
      unionNum.push(num)
      numsMap[num]--
    }
  })
  
  return unionNum
};
// @lc code=end
