/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-06-06 23:20:23
 * @LastEditTime: 2021-06-07 09:11:20
 * @LastEditors: mTm
 */
function binarySearch_c(arr, n, low, high) {
  if (low > high) return -1;
  const mid = Math.ceil((high + low) / 2);
  if (arr[mid] === n) {
    return mid;
  } else if (arr[mid] > n) {
    return binarySearch_c(arr, n, low, mid - 1);
  } else {
    return binarySearch_c(arr, n, mid + 1, high);
  }
}

function binarySearch(arr, n) {
  return binarySearch_c(arr, n, 0, arr.length - 1);
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = binarySearch(arr, 4);
console.log(index);
