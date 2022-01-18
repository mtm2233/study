/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-14 14:06:37
 * @LastEditTime: 2022-01-18 23:07:02
 * @LastEditors: mTm
 */
function max(a, b, c) {
  let max = a;
  if (max.value < b.value) {
    max = b;
  }

  if (max.value < c.value) {
    max = c;
  }

  return {
    ...max,
  };
}

function longestCommonStr(a, b) {
  const m = a.length;
  const n = b.length;
  const maxDist = new Array(m).fill(0).map(() => new Array(n));

  // 初始化第一列
  for (let i = 0; i < m; i++) {
    if (b[0] === a[i]) {
      maxDist[i][0] = {
        str: `${a[i]}`,
        value: 1,
      };
    } else if (i > 0) {
      maxDist[i][0] = {
        ...maxDist[i - 1][0],
      };
    } else {
      maxDist[i][0] = {
        str: '',
        value: 0,
      };
    }
  }
  // 初始化第一行
  for (let j = 0; j < n; j++) {
    if (a[0] === b[j]) {
      maxDist[0][j] = {
        str: `${b[j]}`,
        value: 1,
      };
    } else if (j > 0) {
      maxDist[0][j] = { ...maxDist[0][j - 1] };
    } else {
      maxDist[0][j] = {
        str: '',
        value: 0,
      };
    }
  }

  // 递推公式
  // a[i] === b[j] ? 
  // maxDist[i][j] = max(maxDist[i - 1][j - 1] + 1, maxDist[i - 1][j], maxDist[i][j - 1])
  // : maxDist[i][j] = max(maxDist[i - 1][j - 1], maxDist[i - 1][j], maxDist[i][j - 1])
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if(a[i] === b[j]) {
        maxDist[i][j] = max({
          str: maxDist[i - 1][j - 1].str + a[i],
          value: maxDist[i - 1][j - 1].value + 1
        }, maxDist[i - 1][j], maxDist[i][j - 1])
      } else {
        maxDist[i][j] = max(maxDist[i - 1][j - 1], maxDist[i - 1][j], maxDist[i][j - 1])
      }
    }
  }

  const dist = maxDist[m - 1][n - 1];
  return dist.str || 0
}

module.exports = longestCommonStr;
