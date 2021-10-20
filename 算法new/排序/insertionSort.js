/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-10-06 22:19:44
 * @LastEditTime: 2021-10-06 22:32:03
 * @LastEditors: mTm
 */
function insertionSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const temp = arr[i];
    let j = i - 1;
    // 查找插入的位置
    for (; j >= 0; j--) {
      if (temp < arr[j]) {
        arr[j + 1] = arr[j]; // 数据后移一位
      } else {
        break;
      }
    }
    arr[j + 1] = temp; // 插入数据
  }
}

module.exports = insertionSort;
