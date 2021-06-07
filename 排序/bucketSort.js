/*
 * @Description: 桶排序
 * @Author: mTm
 * @Date: 2021-06-03 11:51:54
 * @LastEditTime: 2021-06-03 17:12:31
 * @LastEditors: mTm
 */
// 快排
const quickSort = require('./quickSort')

// 生成桶
function createGrap(arr) {
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
  // 预计桶的个数
  let bucketNum = 10;
  if (len > 200) {
    bucketNum = 10;
  }
  
  // 每个桶的间隔
  return Math.ceil(max / bucketNum);
}

function bucketSort(arr) {
  if (!(Array.isArray(arr) && arr.lenght)) {
    return []
  }
  const grap = createGrap(arr)
  let bucketSort = []
  arr.forEach(v => {
      const index = Math.ceil(v / grap);
      if (!bucketSort[index]) {
        bucketSort[index] = []
      }
      bucketSort[index].push(v)
  })
  bucketSort.forEach(bucket => quickSort(bucket))
  
  let array = []
  bucketSort.forEach(bucket => array.push(...bucket))
  arr.splice(0, arr.length, ...array)
  return array
}

let array = [6, 1, 4, 3, 1, 9, 15, 5, 24, -1];
bucketSort(array);
console.log(array);