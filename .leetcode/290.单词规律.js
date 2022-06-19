/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-17 21:18:03
 * @LastEditTime: 2022-06-17 21:16:47
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const _s = s.split(' ')
  const len = _s.length;
  if (pattern.length !== len) {
    return false
  }
  // s 是否被映射
  // a => dog
  // b => dog
  const sIsMap = {}
  const map = {}
  for (let i = 0; i < len; i++) {
    const patVal = pattern[i]
    const sVal = _s[i]
    if (!map[patVal]) {
      if (sIsMap[sVal]) {
        return false
      }
      sIsMap[sVal] = true
      map[patVal] = sVal
    } else if (map[patVal] !== sVal) {
      return false
    }
  }
  return true
};
// @lc code=end

