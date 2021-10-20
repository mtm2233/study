/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-09 00:37:48
 * @LastEditTime: 2021-10-09 01:06:03
 * @LastEditors: mTm
 */

function quickSort(arr) {
  const len = arr.length;
  quickSort_c(arr, 0, len - 1)
}

function quickSort_c(arr, p, r) {
  if (p >= r) {
    return
  }
  const pivot = getPivot(arr, p, r);
  let i = p, j = r - 1;
  while (i < j) {
    while (arr[++i] < pivot) {}
    while (arr[--j] > pivot) {}
    if (i < j) {
      wrap(arr, i, j)
    }
  }
  wrap(arr, i, r - 1)
  quickSort_c(arr, p, i - 1)
  quickSort_c(arr, i + 1, r)
}

// 基点
function getPivot(arr, p, r) {
  const q = Math.floor((p + r)/2)
  if (arr[p] > arr[q]) {
    wrap(arr, p, q)
  }
  if (arr[p] > arr[r]) {
    wrap(arr, p, r)
  }
  if (arr[q] > arr[r]) {
    wrap(arr, q, r)
  }

  wrap(arr, q, r - 1)
  return arr[r - 1];
}

function wrap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}

module.exports = quickSort