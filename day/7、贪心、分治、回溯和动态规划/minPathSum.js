/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-14 14:03:39
 * @LastEditTime: 2022-01-17 22:08:25
 * @LastEditors: mTm
 */
function minPathSum(data) {
  const len = data.length;
  // 初始化
  for (let i = 1; i < len; i++) {
    data[0][i] = data[0][i - 1] + data[0][i];
    data[i][0] = data[i - 1][0] + data[i][0];
  }

  for (let i = 1; i < len; i++) {
    for (let j = 1; j < len; j++) {
      data[i][j] += Math.min(data[i - 1][j], data[i][j - 1]);
    }
  }

  return data[len - 1][len - 1];
}

module.exports = minPathSum;
