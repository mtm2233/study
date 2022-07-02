/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-06-30 21:16:17
 * @LastEditTime: 2022-06-30 21:30:54
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const charIndex = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charIndex[char] !== undefined) {
      charIndex[char] = false;
    } else {
      charIndex[char] = i;
    }
  }

  let minIndex = Number.MAX_VALUE;
  for (const key in charIndex) {
    const index = charIndex[key];
    if (index === 0) {
      return 0;
    }
    if (index && minIndex > index) {
      minIndex = index;
    }
  }

  return minIndex === Number.MAX_VALUE ? -1 : minIndex;
};
// @lc code=end
