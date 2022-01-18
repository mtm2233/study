/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-14 14:04:48
 * @LastEditTime: 2022-01-18 23:07:52
 * @LastEditors: mTm
 */
function minEditDistance(a, b) {
  const m = a.length;
  const n = b.length;
  const minDist = new Array(m).fill(0).map(() => new Array(n));
  // 初始化
  for (let j = 0; j < n; j++) {
    if (a[0] === b[j]) {
      minDist[0][j] = j;
    } else if (j > 0) {
      minDist[0][j] = minDist[0][j - 1] + 1;
    } else {
      minDist[0][j] = 1;
    }
  }

  // 初始化
  for (let i = 0; i < m; i++) {
    if (b[0] === a[i]) {
      minDist[i][0] = i;
    } else if (i > 0) {
      minDist[i][0] = minDist[i - 1][0] + 1;
    } else {
      minDist[i][0] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 递推公式
      if (a[i] === b[j]) {
        minDist[i][j] = Math.min(minDist[i - 1][j - 1], minDist[i - 1][j] + 1, minDist[i][j - 1] + 1);
      } else {
        minDist[i][j] = Math.min(minDist[i - 1][j - 1] + 1, minDist[i - 1][j] + 1, minDist[i][j - 1] + 1);
      }
    }
  }

  return minDist[m - 1][n - 1];
}

module.exports = minEditDistance;
