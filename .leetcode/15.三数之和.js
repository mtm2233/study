/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-07-07 20:26:10
 * @LastEditTime: 2022-07-07 22:09:51
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length;
  if (len < 3) {
    return [];
  }

  // 方便查找
  const numMap = {};
  nums.forEach(num => (numMap[num] = (numMap[num] || 0) + 1));

  // 查找完成的
  const searchEnd = {};
  const res = [];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const numi = nums[i];
      const numj = nums[j];

      const rightNum = 0 - numi - numj;
      const rightCount = numMap[rightNum];

      if (i === j || !rightCount || searchEnd[`${numi}${numj}`]) {
        continue;
      }
      searchEnd[`${numi}${numj}`] = true;
      searchEnd[`${numj}${numi}`] = true;

      if (numi === 0 && numj === 0) {
        if (rightCount > 2) {
          res.push([0, 0, 0])
        } else {
          continue;
        }
      } else if (
        (numi === rightNum && rightCount > 1) ||
        (numj === rightNum && rightCount > 1) ||
        (numi !== rightNum && numj !== rightNum)
      ) {
        searchEnd[`${numi}${rightNum}`] = true;
        searchEnd[`${numj}${rightNum}`] = true;
        searchEnd[`${rightNum}${numi}`] = true;
        searchEnd[`${rightNum}${numj}`] = true;

        res.push([numi, numj, rightNum])
      }
    }
  }

  return res;
};
// @lc code=end
