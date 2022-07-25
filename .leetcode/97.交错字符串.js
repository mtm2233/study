/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-07-18 20:04:08
 * @LastEditTime: 2022-07-18 20:30:40
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  let flag = false;

  const len1 = s1.length;
  const len2 = s2.length;
  const len3 = s3.length;

  const map = new Map();

  if (len1 + len2 !== len3) {
    return false;
  }

  function isInterleave_c(i, j, k) {
    // 枝剪
    const mapKey = `${i}${j}${k}`;
    if (map.get(mapKey)) {
      return;
    }
    map.set(mapKey, true);

    if (flag) {
      return;
    }
    if (k === len3) {
      flag = true;
    }

    if (i < len1 && s1[i] === s3[k]) {
      isInterleave_c(i + 1, j, k + 1);
    }

    if (j < len2 && s2[j] === s3[k]) {
      isInterleave_c(i, j + 1, k + 1);
    }
  }

  isInterleave_c(0, 0, 0);
  return flag;
};
// @lc code=end
