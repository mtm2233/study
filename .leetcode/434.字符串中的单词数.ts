/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-08-06 16:36:10
 * @LastEditTime: 2022-08-07 17:00:06
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=434 lang=typescript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
function countSegments(s: string): number {
  let count = 0
  let hasChar = false
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (hasChar) {
        count++
        hasChar = false
      }
    } else if (!hasChar) {
      hasChar = true
    }
  }
  return hasChar ? count + 1 : count
};
// @lc code=end

