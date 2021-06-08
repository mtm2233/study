/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-06-08 09:12:18
 * @LastEditTime: 2021-06-08 11:42:42
 * @LastEditors: mTm
 */
function binarySearch(arr, n) {
  const len = arr.length - 1;
  let low = 0;
  let high = len;
  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    if (arr[mid] > n) {
      high = mid - 1;
    } else {
      if (mid === len || arr[mid + 1] > n) {
        return mid;
      }
      low = mid + 1;
    }
  }
  return -1;
}

const arr = [0, 1, 2, 3, 5, 6, 7, 8, 9];
const index = binarySearch(arr, 5);
console.log(index);
