/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-27 13:38:59
 * @LastEditTime: 2021-08-29 23:09:46
 * @LastEditors: mTm
 */
let array = [1, 6, 4, 3, 1, 9, 15, 5, 24, -1];

function wrap(a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function bubbleSort() {
  const len = array.length - 1;
  let is_wrap = false;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (array[j] > array[j + 1]) {
        wrap(j, j + 1);
        is_wrap = true;
      }
    }
    if (!is_wrap) {
      break;
    }
  }
}

bubbleSort();
console.log(array);
