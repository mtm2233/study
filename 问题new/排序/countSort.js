/*
 * @Description: 计数排序
 * @Author: mTm
 * @Date: 2021-10-11 22:03:35
 * @LastEditTime: 2021-10-11 22:21:14
 * @LastEditors: mTm
 */
function countSort(arr) {
  const len = arr.length;

  let max = arr[0]
  for (let i = 1; i < len; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  // 计数
  const countArr = new Array(max + 1).fill(0);
  for (let i = 0; i < len; i++) {
    ++countArr[arr[i]]
  }
  // 累加
  for (let i = 1; i <= max; i++) {
    countArr[i] = countArr[i] + countArr[i - 1]
  }

  const handlerArr = new Array(len);

  for (let i = len - 1; i >= 0; i--) {
    const index = --countArr[arr[i]];
    handlerArr[index] = arr[i];
  }

  for (let i = 0; i < len; i++) {
    arr[i] = handlerArr[i]
  }
}

module.exports = countSort