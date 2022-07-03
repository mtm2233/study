/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-03 18:22:23
 * @LastEditTime: 2022-07-03 18:49:24
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length > t.length) {
    return false
  }
  
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++
      j++
    } else {
      j++
    }
  }

  return !s[i]
};
// @lc code=end