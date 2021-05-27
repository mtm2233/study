/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-27 09:09:29
 * @LastEditTime: 2021-05-27 09:18:30
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

const hasSolvedList = new Map();
var climbStairs = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 2;

  if (hasSolvedList.get(n)) {
    return hasSolvedList.get(n);
  }

  const ret = climbStairs(n - 1) + climbStairs(n - 2);
  hasSolvedList.set(n, ret);
  return ret;
};
// @lc code=end
