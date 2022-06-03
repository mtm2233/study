/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-03 21:49:29
 * @LastEditTime: 2022-06-03 22:05:48
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const len = s.length;
  if (len !== t.length) {
    return false
  }
  // s中字符映射t中字符
  const map = {}
  // t中字符是否被映射过
  const isMap = {}
  for (let i = 0; i < len; i++) {
    const char1 = s[i]
    const char2 = t[i]
    if (!map[char1] && !isMap[char2]) {
      map[char1] = char2
      isMap[char2] = true
    } else if (map[char1] !== char2) {
      return false
    }
  }

  return true
};
// @lc code=end