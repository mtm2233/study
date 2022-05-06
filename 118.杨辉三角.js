/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const arrs = new Array(numRows).fill(0).map(() => new Array());
  for (let i = 0; i < numRows; i++) {
    arrs[i][0] = 1;
    arrs[i][i] = 1;
    if (i < 2) {
      continue;
    }
    for (let j = 1; j < i; j++) {
      arrs[i][j] = arrs[i - 1][j - 1] + arrs[i - 1][j];
    }
  }
  return arrs;
};
// @lc code=end
