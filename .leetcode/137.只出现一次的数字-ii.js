/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-26 20:42:28
 * @LastEditTime: 2022-07-26 21:04:36
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map()
  nums.forEach(num => {
    const count = (map.get(num) || 0) + 1
    if (count === 3) {
      map.delete(num)
    } else {
      map.set(num, count)
    }
  })

  let num = null;
  map.forEach((value, key) => num = key)
  return num
};
// @lc code=end
