/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const len = s.length
  if (len !== t.length) {
    return false
  }

  const map = {}
  for (let i = 0; i < len; i++) {
    const val = s[i]
    if (map[val]) {
      map[val]++
    } else {
      map[val] = 1
    }
  }

  for (let i = 0; i < len; i++) {
    const val = t[i]
    if (map[val]) {
      map[val]--
    } else {
      return false
    }
  }

  return true
};
// @lc code=end

