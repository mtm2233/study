/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-06-08 09:11:01
 * @LastEditTime: 2021-06-08 11:47:21
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
    } else if (arr[mid] < n) {
      low = mid + 1;
    } else if (mid === len || arr[mid + 1] !== n) {
      return mid;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

const arr = [0, 1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9];
const index = binarySearch(arr, 5);
console.log(index);
