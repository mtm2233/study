/*
 * @Description: 暴力匹配算法
 * @Author: mTm
 * @Date: 2021-06-29 16:06:29
 * @LastEditTime: 2021-07-03 22:58:15
 * @LastEditors: mTm
 */
function bf(main, pattern) {
  const n = pattern.length;
  const m = main.length;
  // 偏移
  const offset = m - n
  for (let i = 0; i <= offset; ++i) {
    let j = 0
    for (; j < n; ++j) {
        if (pattern[j] !== main[j + i]) {
            break;
        }
    }
    if (j === n) {
        return i
    }
  }
  return -1
}

console.log(bf("abc1245", "124"));
