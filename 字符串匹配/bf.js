/*
 * @Description: 暴力匹配算法
 * @Author: mTm
 * @Date: 2021-06-29 16:06:29
 * @LastEditTime: 2021-06-30 10:33:53
 * @LastEditors: mTm
 */
function bf(main, pattern) {
  const n = main.length;
  const m = pattern.length;
  // 偏移
  const offset = n - m
  for (let i = 0; i <= offset; ++i) {
    let j = 0
    for (; j < m; ++j) {
        if (pattern[j] !== main[j + i]) {
            break;
        }
    }
    if (j === m) {
        return i
    }
  }
  return -1
}

console.log(bf("abc1245", "124"));
