/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-06-24 23:54:55
 * @LastEditTime: 2022-06-25 12:35:16
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0;
  }
  const charIndex = {};
  let startIndex = 0;
  let maxLen = 0;
  let currLen = 0

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const preIndex = charIndex[char]
    if (preIndex !== undefined) {
      startIndex = Math.max(preIndex, startIndex);
      
      maxLen = Math.max(maxLen, currLen);
      currLen = i - startIndex;
    } else {
      currLen++
    }
    charIndex[char] = i;
  }

  maxLen = Math.max(maxLen, currLen);
  return maxLen;
};
// @lc code=end