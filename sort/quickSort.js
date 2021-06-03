/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-06-01 13:14:07
 * @LastEditTime: 2021-06-03 14:57:00
 * @LastEditors: mTm
 */
function quick(A, a, b) {
  const temp = A[a];
  A[a] = A[b];
  A[b] = temp;
}
// 获取分区点
function partition(A, p, r) {
  const q = Math.floor((p + r) / 2);
  if (A[p] > A[q]) {
    quick(A, p, q);
  }
  if (A[q] > A[r]) {
    quick(A, q, r);
  }
  if (A[p] > A[q]) {
    quick(A, p, q);
  }
  quick(A, q, r - 1);
  return A[r - 1];
}

function quick_sort_c(A, p, r) {
  if (p >= r) return;
  const center = partition(A, p, r);
  let i = p;
  let j = r - 1;
  while (i < j) {
    while (A[++i] < center) {}
    while (A[--j] > center) {}
    if (i < j) {
      quick(A, i, j);
    }
  }
  quick(A, i, r - 1);
  quick_sort_c(A, p, i - 1)
  quick_sort_c(A, i + 1, r)
}

function quickSort(A) {
  quick_sort_c(A, 0, A.length - 1);
}

let array = [1,3,2,4];
quickSort(array);
console.log(array);

module.exports = quickSort