/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-06-29 20:10:22
 * @LastEditTime: 2022-06-29 20:15:03
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const charCount = {};

  for (const char of magazine) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of ransomNote) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
};
// @lc code=end
