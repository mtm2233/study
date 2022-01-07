/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-07 14:49:25
 * @LastEditTime: 2022-01-07 21:59:09
 * @LastEditors: mTm
 */
function wrap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// 获取分区点
function partition(arr, p, q) {
  const r = (p + q) >> 1;
  if (arr[p] > arr[r]) {
    wrap(arr, p, r);
  }
  if (arr[p] > arr[q]) {
    wrap(arr, p, q);
  }
  if (arr[r] > arr[q]) {
    wrap(arr, r, q);
  }
  wrap(arr, r, q - 1);
  return arr[q - 1];
}

function searchTopK_c(arr, p, q, k) {
  const center = partition(arr, p, q);
  let i = p;
  let j = q - 1;
  while (i < j) {
    while (arr[++i] < center) {}
    while (arr[--j] > center) {}
    if (i < j) {
      wrap(arr, i, j);
    }
  }
  wrap(arr, i, q - 1);
  if (k === i) {
    return arr[i];
  }
  if (k < i) {
    return searchTopK_c(arr, p, i - 1, k);
  } else {
    return searchTopK_c(arr, i + 1, q, k);
  }
}

function searchTopK(arr, k) {
  return searchTopK_c(arr, 0, arr.length - 1, k - 1);
}

module.exports = searchTopK;
