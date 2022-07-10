/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-10 20:25:07
 * @LastEditTime: 2022-07-10 20:31:49
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const charCount = {}

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    charCount[char] = (charCount[char] || 0) + 1
  }

  let len = 0;
  Object.values(charCount).forEach(sum => {
    // 2的倍数
    len += (sum >> 1)
  })

  len *= 2;

  return len === s.length ? len : len + 1
};
// @lc code=end

