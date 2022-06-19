/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-18 21:46:11
 * @LastEditTime: 2022-06-19 11:18:12
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.map = new Map()
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  if (left < 0 || right >= this.nums.length) {
    return null
  }

  const mapKey = `${left}-${right}`
  const mapVal = this.map.get(mapKey);
  if (mapVal !== undefined) {
    return mapVal
  }

  let count = 0;
  for (let i = left; i <= right; i++) {
    count += this.nums[i]
  }
  this.map.set(mapKey, count)
  return count
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

