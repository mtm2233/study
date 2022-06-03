/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const appearNums = {}
  while (!appearNums[n]) {
    appearNums[n] = true;
    let _n = 0
    n = n.toString()
    for (let i = 0; i < n.length; i++) {
      _n += n[i] ** 2
    }
    n = _n
  }
  return n === 1
};
// @lc code=end