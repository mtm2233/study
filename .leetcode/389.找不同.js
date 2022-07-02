/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-01 22:15:04
 * @LastEditTime: 2022-07-01 22:31:09
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  if (s.length >= t.length) {
    return null
  }

  const charMap = {}

  for (const char of s) {
    charMap[char] = (charMap[char] || 0) + 1
  }

  for (const char of t) {
    if (!charMap[char]) {
      return char
    } else {
      charMap[char]--
    }
  }

  return null
};
// @lc code=end

