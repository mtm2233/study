/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-14 21:06:11
 * @LastEditTime: 2022-07-14 21:18:19
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = []

  function generateParenthesis_c(str, left, right) {
    if (!left && !right) {
      res.push(str + ')')
      return
    }

    if (left) {
      generateParenthesis_c(str + '(', left - 1, right)
    }
    if (right >= left) {
      generateParenthesis_c(str + ')', left, right - 1)
    }
  }

  generateParenthesis_c('(', n - 1, n - 1)

  return res
};
// @lc code=end