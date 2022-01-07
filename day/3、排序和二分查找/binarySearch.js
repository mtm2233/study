/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-01-07 14:50:25
 * @LastEditTime: 2022-01-07 22:07:12
 * @LastEditors: mTm
 */
function binarySearch(arr, num) {
  let p = 0;
  let q = arr.length - 1;
  while (p <= q) {
    const r = (p + q) >> 1;
    if (arr[r] === num) {
      return r
    }

    if (arr[r] < num) {
      p = r + 1;
    } else {
      q = r - 1
    }
  }
  return -1;
}

module.exports = binarySearch