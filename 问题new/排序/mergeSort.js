/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-09 00:11:04
 * @LastEditTime: 2021-10-09 00:35:38
 * @LastEditors: mTm
 */
function mergeSort(arr) {
  const len = arr.length;
  mergeSort_c(arr, 0, len - 1)
}

function mergeSort_c(arr, p, r) {
  if (p >= r) {
    return
  }
  const q = Math.floor((r + p)/2);
  mergeSort_c(arr, p, q);
  mergeSort_c(arr, q + 1, r);
  merge(arr, p, q + 1, r)
}

function merge(arr, p, q, r) {
  const left = arr.slice(p, q);
  const right = arr.slice(q, r + 1);
  left.push(Number.MAX_SAFE_INTEGER);
  right.push(Number.MAX_SAFE_INTEGER);
  let i = 0, j = 0, k = p;
  while (left[i] !== Number.MAX_SAFE_INTEGER) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++]
    } else {
      arr[k++] = right[j++]
    }
  }
}

module.exports = mergeSort