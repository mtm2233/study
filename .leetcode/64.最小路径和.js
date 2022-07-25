/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-19 09:12:42
 * @LastEditTime: 2022-07-19 09:36:40
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const xlen = grid.length;
  const ylen = grid[0].length;
  // 纯函数
  const res = new Array(xlen).fill(0).map(() => new Array(ylen));
  // 默认值
  res[0][0] = grid[0][0]
  // row
  for (let i = 1; i < ylen; i++) {
    res[0][i] = res[0][i - 1] + grid[0][i]
  }
  // column
  for (let i = 1; i < xlen; i++) {
    res[i][0] = res[i - 1][0] + grid[i][0]
  }

  // dp方程：res[i][j] = Math.min(res[i - 1][j], res[i][j - 1]) + grid[i][j]
  for (let i = 1; i < xlen; i++) {
    for (let j = 1; j < ylen; j++) {
      res[i][j] = Math.min(res[i - 1][j], res[i][j - 1]) + grid[i][j]
    }
  }

  return res[xlen - 1][ylen - 1]
};
// @lc code=end
// console.log(minPathSum([[1,2,3],[4,5,6]]));