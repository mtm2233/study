/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-06-08 09:11:27
 * @LastEditTime: 2021-06-08 11:59:05
 * @LastEditors: mTm
 */
function binarySearch(arr, n) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    if (arr[mid] >= n) {
      if (mid === 0 || arr[mid - 1] < n) {
        return mid;
      }
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

const arr = [0, 1, 2, 3, 5, 6, 7, 8, 9];
const index = binarySearch(arr, 4);
console.log(index);
