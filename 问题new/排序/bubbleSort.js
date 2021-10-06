/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-06 21:07:59
 * @LastEditTime: 2021-10-06 21:56:18
 * @LastEditors: mTm
 */
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    // 提前退出冒泡循环的标志位
    let flag = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // 有数据交换
        flag = true;
      }
    }
    if(!flag) {
      break;
    }
  }
}

module.exports = bubbleSort