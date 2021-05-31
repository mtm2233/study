/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-31 17:07:55
 * @LastEditTime: 2021-05-31 22:26:09
 * @LastEditors: mTm
 */
function merger(left, right) {
  const n = left && left.length;
  const m = right && right.length;
  let backs = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (left[i] < right[j]) {
      backs.push(left[i++]);
    } else {
      backs.push(right[j++]);
    }
  }
  while (i < n) {
    backs.push(left[i++]);
  }
  while (j < m) {
    backs.push(right[j++]);
  }
  return backs;
}

function mergeSort(arr) {
  const len = arr.length;
  // 递归终止条件
  if (len === 1) {
    return arr;
  }
  // 取p到r之间的中间位置q
  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  // 分治递归
  return merger(mergeSort(left), mergeSort(right));
}

let array = [1, 6, 4, 3, 1, 9, 15, 5, 24, -1];
console.log(mergeSort(array));
