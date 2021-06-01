/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-31 17:07:55
 * @LastEditTime: 2021-06-01 11:12:20
 * @LastEditors: mTm
 */
// function merger(left, right) {
//   const n = left && left.length;
//   const m = right && right.length;
//   let backs = [];
//   let i = 0;
//   let j = 0;
//   while (i < n && j < m) {
//     if (left[i] < right[j]) {
//       backs.push(left[i++]);
//     } else {
//       backs.push(right[j++]);
//     }
//   }
//   while (i < n) {
//     backs.push(left[i++]);
//   }
//   while (j < m) {
//     backs.push(right[j++]);
//   }
//   return backs;
// }

// function mergeSort(arr) {
//   const len = arr.length;
//   // 递归终止条件
//   if (len === 1) {
//     return arr;
//   }
//   // 取p到r之间的中间位置q
//   const mid = Math.floor(len / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);
//   // 分治递归
//   return merger(mergeSort(left), mergeSort(right));
// }

// let array = [1, 6, 4, 3, 1, 9, 15, 5, 24, -1];
// console.log(mergeSort(array));

function merge(A, p, r, q) {
  const left = A.slice(p, q + 1)
  const right = A.slice(q + 1, r + 1)
  const max_value = 99999;
  left.push(max_value)
  right.push(max_value)
  let i = 0;
  let j = 0;
  let k = p;
  while (left[i] !== max_value) {
    if (left[i] <= right[j]) {
      A[k++] = left[i++]
    } else {
      A[k++] = right[j++]
    }
  }
}

function merge_sort_c(A, p, r) {
  if (p >= r) return;
  const q = Math.floor((p + r) / 2);
  merge_sort_c(A, p, q)
  merge_sort_c(A, q + 1, r)
  merge(A, p, r, q)
}

function mergeSort(A) {
  merge_sort_c(A, 0, A.length - 1);
}

let array = [1, 6, 4, 3, 1, 9, 15, 5, 24, -1];
mergeSort(array)
console.log(array);
