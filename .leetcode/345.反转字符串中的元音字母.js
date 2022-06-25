/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-06-23 22:10:02
 * @LastEditTime: 2022-06-23 22:28:27
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = {
    a: true,
    A: true,
    e: true,
    E: true,
    i: true,
    I: true,
    o: true,
    O: true,
    u: true,
    U: true
  }
  const arr = s.split('')
  let i = 0
  let j = arr.length - 1

  while (i < j) {
    while (arr[i] && !vowels[arr[i]]) { i++ }
    while (arr[j] && !vowels[arr[j]]) { j-- }
    if (i < j) {
      const temp = arr[i]
      arr[i++] = arr[j]
      arr[j--] = temp
    }
  }

  return arr.join('')
};
// @lc code=end