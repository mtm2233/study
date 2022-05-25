/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-06 22:35:26
 * @LastEditTime: 2021-10-06 22:38:14
 * @LastEditors: mTm
 */
function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    // 找到剩余元素中的最小值的下标
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp
    }
  }
}

module.exports = selectionSort