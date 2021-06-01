/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-06-01 13:14:07
 * @LastEditTime: 2021-06-01 14:09:42
 * @LastEditors: mTm
 */
function wrap(A, a, b) {
  const temp = A[a];
  A[a] = A[b];
  A[b] = temp;
}
// 获取分区点
function partition(A, p, r) {
  const q = Math.floor((p + r) / 2);
  if (A[p] > A[q]) {
    wrap(A, p, q);
  }
  if (A[q] > A[r]) {
    wrap(A, q, r);
  }
  if (A[p] > A[q]) {
    wrap(A, p, q);
  }
  wrap(A, q, r);
  return A[r];
}

function wrap_sort_c(A, p, r) {
  if (p >= r) return;
  const center = partition(A, p, r);
  let i = p;
  let j = r - 1;
  while (i < j) {
    while (A[++i] < center) {}
    while (A[--j] > center) {}
    if (i < j) {
      wrap(A, i, j);
    }
  }
  wrap(A, i, r);
  wrap_sort_c(A, p, i - 1)
  wrap_sort_c(A, i + 1, r)
}

function wrapSort(A) {
  wrap_sort_c(A, 0, A.length - 1);
}

let array = [10, 6, 4, 3, 9, 8, 15, 5, 24, -1];
wrapSort(array);
console.log(array);
