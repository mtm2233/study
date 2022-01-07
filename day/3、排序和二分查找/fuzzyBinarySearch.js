/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-07 14:51:32
 * @LastEditTime: 2022-01-07 22:10:37
 * @LastEditors: mTm
 */
function fuzzyBinarySearch(arr, num) {
  let p = 0;
  let q = arr.length - 1;
  while (p <= q) {
    const r = (p + q) >> 1;
    if (arr[r] >= num && (r === 0 || arr[r - 1] < num)) {
      return r;
    }

    if (arr[r] < num) {
      p = r + 1;
    } else {
      q = r - 1;
    }
  }
  return -1;
}

module.exports = fuzzyBinarySearch;
