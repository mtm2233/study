/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-05-29 23:09:44
 * @LastEditTime: 2022-05-29 23:27:38
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let col = 0
  let num = 1
  const charCode = {}
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const char = columnTitle[i]
    let charNum = charCode[char]
    if(!charNum) {
      charNum = columnTitle[i].charCodeAt() - 64
      charCode[char] = charNum
    }
    col += charNum * num
    num *= 26
  }
  return col
};
// @lc code=end
