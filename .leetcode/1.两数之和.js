/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-20 16:02:50
 * @LastEditTime: 2021-05-20 16:26:30
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map(nums.map((val, index) => [val, index]));
  for (let index = 0; index < nums.length; index++) {
    const mapNum = map.get(target - nums[index]);
    if (mapNum && mapNum !== 0 && mapNum !== index) {
      return [index, mapNum];
    }
  }
};
// @lc code=end
console.log(twoSum([1, 3, 4, 2], 6));
