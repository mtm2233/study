/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-30 18:16:10
 * @LastEditTime: 2022-07-30 18:26:14
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=806 lang=typescript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
function numberOfLines(widths: number[], s: string): number[] {
  let row = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const index = char.charCodeAt(0) - 97
    const num = widths[index]
    
    if (count + num > 100) {
      row++
      count = num
    } else {
      count += num
    }
  }

  if (count) {
    row++
  } else {
    count = 100
  }

  return [row, count]
};
// @lc code=end

