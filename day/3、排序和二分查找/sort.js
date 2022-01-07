/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-07 14:45:46
 * @LastEditTime: 2022-01-07 21:54:34
 * @LastEditors: mTm
 */

function wrap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// 归并排序
function mergeSort_merge(arr, p, r, q) {
  const left = arr.slice(p, r + 1);
  const right = arr.slice(r + 1, q + 1);
  const MAX_VALUE = 99999;
  left.push(MAX_VALUE);
  right.push(MAX_VALUE);
  let i = 0;
  let j = 0;
  let k = p;
  while (left[i] !== MAX_VALUE) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
    }
  }
}
function mergeSort_c(arr, p, q) {
  if (p >= q) {
    return;
  }
  const r = (p + q) >> 1;
  mergeSort_c(arr, p, r);
  mergeSort_c(arr, r + 1, q);
  mergeSort_merge(arr, p, r, q);
}
function mergeSort(arr) {
  mergeSort_c(arr, 0, arr.length - 1);
  return arr;
}

// 快速排序
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

function quickSort_c(arr, p, q) {
  if (p >= q) {
    return;
  }
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
  quickSort_c(arr, p, i - 1);
  quickSort_c(arr, i + 1, q);
}

function quickSort(arr) {
  quickSort_c(arr, 0, arr.length - 1);
  return arr;
}

// 插⼊排序
function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    // while (j >= 0 && arr[j] > temp) {
    //   arr[j + 1] = arr[j];
    //   j--
    // }
    for (; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = temp;
  }
}

// 冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        wrap(arr, j, j + 1)
      }
    }
  }
}

// 选择排序
function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let max = 0
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[max] < arr[j]) {
        max = j
      }
    }
    wrap(arr, max, arr.length - i - 1)
  }
}

// 校验排序
function verifySort(arr) {
  if (Array.isArray(arr)) {
    let max = 0;
    let k = 1;
    while (arr[k] && arr[max++] <= arr[k++]) {}
    return !arr[k];
  }
  return false;
}

module.exports = {
  mergeSort,
  quickSort,
  insertSort,
  bubbleSort,
  selectSort,
  verifySort,
};
