/*
 * @Description: 计数排序
 * @Author: mTm
 * @Date: 2021-06-03 11:52:27
 * @LastEditTime: 2021-06-03 17:12:39
 * @LastEditors: mTm
 */

// 假设没有负数
function countingSort(arr) {
  if (!(Array.isArray(arr) && arr.lenght)) {
    return []
  }
  const len = arr.length;
  // 最大值
  let max = arr[0];
  // 获取最大值
  let i = 0;
  while (i < len) {
    if (max < arr[++i]) {
      max = arr[i];
    }
  }
  // 初始化
  i = 0;
  let a = [];
  while (i <= max) {
    a[i++] = 0;
  }

  // 计算每个元素的个数，放入a中
  i = 0;
  while (i < len) {
    a[arr[i++]]++;
  }

  // 依次累加
  i = 0;
  while (++i <= max) {
    a[i] += a[i - 1];
  }

  const r = []
  i = len
  while(--i >= 0) {
    r[--a[arr[i]]] = arr[i]
  }
  arr.splice(0, len, ...r)
  return r
}

let array = [6, 1, 4, 3, 1, 9, 15, 5, 24];
countingSort(array);
console.log(array);
