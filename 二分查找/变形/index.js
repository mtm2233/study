/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-06-08 11:59:15
 * @LastEditTime: 2021-06-08 13:22:52
 * @LastEditors: mTm
 */
function binarySearch(arr, n) {
  const len = arr.length;
  let low = 0;
  let high = len - 1;
  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    if (arr[mid] >= n) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  if (low < len && arr[low] === n) return low;
  return -1;
}

const arr = [0, 1, 2, 3, 5, 6, 7, 8, 9];
const index = binarySearch(arr, 5);
console.log(index);
