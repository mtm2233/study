/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-08-29 22:58:52
 * @LastEditTime: 2021-08-31 22:28:45
 * @LastEditors: mTm
 */
/* 如何量化两个字符串的相似度？
计算机只认识数字，所以要解答开篇的问题，我们就要先来看，如何量化两个字符串之间的相似程度呢？
有一个非常著名的量化方法，那就是编辑距离（Edit Distance）。

顾名思义，编辑距离指的就是，将一个字符串转化成另一个字符串，
需要的最少编辑操作次数（比如增加一个字符、删除一个字符、替换一个字符）。
编辑距离越大，说明两个字符串的相似程度越小；相反，编辑距离就越小，
说明两个字符串的相似程度越大。对于两个完全相同的字符串来说，编辑距离就是0。 */

// （Levenshtein distance）莱文斯坦距离允许增加、删除、替换字符这三个编辑操作
// （Longest common substring length）最长公共子串长度只允许增加、删除字符这两个编辑操作。

// 回溯
class LwstBT {
  constructor(charA, charB) {
    this.charA = charA.split('');
    this.charB = charB.split('');
    this.n = charA.length;
    this.m = charB.length;
  }

  levensteinRecall() {
    let minDist = Number.MAX_SAFE_INTEGER;
    const { charA, charB, n, m } = this;
    const levensteinRecall_c = (i, j, eDist) => {
      if (i === n || m === j) {
        if (i < n) {
          eDist += n - i;
        } else if (j < m) {
          eDist += m - j;
        }
        if (eDist < minDist) {
          minDist = eDist;
        }
        return;
      }

      if (charA[i] === charB[j]) {
        levensteinRecall_c(i + 1, j + 1, eDist);
      } else {
        levensteinRecall_c(i + 1, j, eDist + 1); // 删除a[i]或者b[j]前添加一个字符
        levensteinRecall_c(i, j + 1, eDist + 1); // 删除b[j]或者a[i]前添加一个字符
        levensteinRecall_c(i + 1, j + 1, eDist + 1); // 将a[i]和b[j]替换为相同字符
      }
    };
    levensteinRecall_c(0, 0, 0);
    return minDist;
  }

  levenstein() {
    // 如果：a[i]!=b[j]，那么：min_edist(i, j)就等于：
    // min(min_edist(i-1,j)+1, min_edist(i,j-1)+1, min_edist(i-1,j-1)+1)

    // 如果：a[i]==b[j]，那么：min_edist(i, j)就等于：
    // min(min_edist(i-1,j)+1, min_edist(i,j-1)+1，min_edist(i-1,j-1))

    // 其中，min表示求三数中的最小值。
    const { charA, charB, n, m } = this;
    const minDist = new Array(n).fill(0).map(v => new Array(m));
    // 初始化第0列:a[0..i]与b[0..0]的编辑距离
    for (let j = 0; j < n; ++j) {
      if (charA[j] === charB[0]) {
        minDist[j][0] = j;
      } else if (j > 0) {
        minDist[j][0] = minDist[j - 1][0] + 1;
      } else {
        minDist[j][0] = 1;
      }
    }
    // 初始化第0行:a[0..0]与b[0..j]的编辑距离
    for (let i = 1; i < m; ++i) {
      if (charB[i] !== charA[0]) {
        minDist[0][i] = i;
      } else if (i > 0) {
        minDist[0][i] = minDist[0][i - 1] + 1;
      } else {
        minDist[0][i] = 1;
      }
    }
    console.log(minDist);
    // 按行填表
    for (let i = 1; i < n; ++i) {
      for (let j = 1; j < m; ++j) {
        if (charA[i] === charB[j]) {
          minDist[i][j] = Math.min(
            minDist[i - 1][j] + 1,
            minDist[i][j - 1] + 1,
            minDist[i - 1][j - 1]
          );
        } else {
          minDist[i][j] = Math.min(
            minDist[i - 1][j] + 1,
            minDist[i][j - 1] + 1,
            minDist[i - 1][j - 1] + 1
          );
        }
      }
    }

    return minDist[n - 1][m - 1];
  }

  commonRecall() {
    let maxDist = Number.MIN_SAFE_INTEGER;
    const { charA, charB, n, m } = this;
    const commonRecall_c = (i, j, eDist) => {
      if (i === n || m === j) {
        if (eDist > maxDist) {
          maxDist = eDist;
        }
        return;
      }
      if (charA[i] === charB[j]) {
        commonRecall_c(i + 1, j + 1, eDist + 1);
      } else {
        commonRecall_c(i + 1, j, eDist);
        commonRecall_c(i, j + 1, eDist);
      }
    };
    commonRecall_c(0, 0, 0);
    return maxDist;
  }
  common() {
    const { charA, charB, n, m } = this;
    const maxDist = new Array(n).fill(0).map(v => new Array(m));
    //初始化第0列：a[0..i]与b[0..0]的maxlcs
    for (let j = 0; j < n; ++j) {
      if (charA[j] === charB[0]) {
        maxDist[j][0] = 1
      } else if(j > 0) {
        maxDist[j][0] = maxDist[j - 1][0]
      } else{
        maxDist[j][0] = 0;
      }
    }
    //初始化第0行：a[0..0]与b[0..j]的maxlcs
    for (let i = 0; i < m; ++i) {
      if (charA[0] === charB[i]) {
        maxDist[0][i] = 1
      } else if (i > 1) {
        maxDist[0][i] = maxDist[0][i - 1]
      } else {
        maxDist[0][i] = 0;
      }
    }

    for (let j = 1; j < n; ++j) {
      for (let i = 1; i < m; ++i) {
        if (charA[j] === charB[i]) {
          maxDist[j][i] = Math.max(
            maxDist[j - 1][i - 1] + 1,
            maxDist[j - 1][i],
            maxDist[j][i - 1]
          );
        } else {
          maxDist[j][i] = Math.max(
            maxDist[j - 1][i - 1],
            maxDist[j - 1][i],
            maxDist[j][i - 1]
          );
        }
      }
    }
    return maxDist[n - 1][m - 1]
  }
}

const lwstBT = new LwstBT('acaaabaa', 'aaa');

// console.log(lwstBT.levensteinRecall());
console.log(lwstBT.levenstein());
// console.log(lwstBT.commonRecall());
// console.log(lwstBT.common());
