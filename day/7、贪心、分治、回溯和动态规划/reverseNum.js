/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-14 14:00:25
 * @LastEditTime: 2022-01-17 20:52:17
 * @LastEditors: mTm
 */
function statisticsCount(arr, p, r, q, count) {
  for (let i = p; i <= r; i++) {
    for (let j = r + 1; j <= q; j++) {
      if (arr[i] > arr[j]) {
        count.value++
      }
    }
  }
}

function reverseNum_c(arr, p, q, count) {
  if (p >= q) {
    return;
  }
  const r = (p + q) >> 1;
  reverseNum_c(arr, p, r, count)
  reverseNum_c(arr, r + 1, q, count)
  statisticsCount(arr, p, r, q, count)
}

function reverseNum(arr) {
  const count = {
    value: 0,
  };
  reverseNum_c(arr, 0, arr.length - 1, count);
  return count.value;
}

module.exports = reverseNum;
