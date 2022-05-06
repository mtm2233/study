/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const arr = new Array(rowIndex + 1).fill(1);
  for (let i = 2; i <= rowIndex; i++) {
    for (let j = i - 1; j > 0; j--) {
      arr[j] += arr[j - 1]
    }
  }
  return arr;
};
// @lc code=end

