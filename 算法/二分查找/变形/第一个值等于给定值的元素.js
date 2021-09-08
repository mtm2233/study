/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-06-08 09:10:54
 * @LastEditTime: 2021-06-08 10:46:29
 * @LastEditors: mTm
 */
function binarySearch(arr, n) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    if (arr[mid] > n) {
      high = mid - 1;
    } else if (arr[mid] < n) {
      low = mid + 1;
    } else if (mid === 0 || arr[mid - 1] !== n) {
      return mid;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const arr = [0, 1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9];
const index = binarySearch(arr, 5);
console.log(index);
