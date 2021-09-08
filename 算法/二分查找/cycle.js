/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-06-06 23:20:15
 * @LastEditTime: 2021-06-07 09:11:02
 * @LastEditors: mTm
 */

function binarySearch(arr, n) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.ceil((high + low) / 2);
    if (arr[mid] === n) {
      return mid;
    } else if (arr[mid] > n) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = binarySearch(arr, 4);
console.log(index);
