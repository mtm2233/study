/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-08-01 20:33:13
 * @LastEditTime: 2022-08-01 20:50:18
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=867 lang=typescript
 *
 * [867] 转置矩阵
 */

// @lc code=start
function transpose(matrix: number[][]): number[][] {
  const xLen = matrix[0].length
  const yLen = matrix.length
  const _matrix = new Array(xLen).fill(0).map(() => new Array(yLen))
  for (let i = 0; i < yLen; i++) {
    for (let j = 0; j < xLen; j++) {
      _matrix[j][i] = matrix[i][j]
    }
  }
  return _matrix
};
// @lc code=end