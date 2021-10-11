/*
 * @Description: 桶排序
 * @Author: mTm
 * @Date: 2021-10-11 10:36:46
 * @LastEditTime: 2021-10-11 11:57:26
 * @LastEditors: mTm
 */

/* 桶排序⽐较适合⽤在外部排序中 桶 。
所谓的外部排序就是数据存储在外部磁盘中，
数据量⽐较⼤，内存有限， ⽆法将数据全部加载到内存中。 */

/* 
1、将大文件分成多个小文件
2、排序小文件
3、合并小文件 
*/

const quickSort = require('./quickSort')

function bucketSort(arr) {
  const len = arr.length;
  // 每个桶的元素数量
  const bucketCount = 1000;
  // 桶的数量
  let max = 0;
  let min = 0;
  for (let i = 0; i < len; i++) {
    const index = Math.floor(arr[i] / bucketCount);
    if (max < index) {
      max = index
    }
    if (min > index) {
      min = index
    }
  }
  let bucketArr = new Array(max - min + 1).fill(0).map(v => new Array());
  // 将数据放入桶
  for (let i = 0; i < len; i++) {
    const index = Math.floor(arr[i] / bucketCount) - min;
    bucketArr[index].push(arr[i])
  }
  // 过滤无数据的桶
  bucketArr = bucketArr.filter(v => v.length)
  
  // 合并桶
  arr.splice(0, len)
  bucketArr.forEach(bucket => {
    quickSort(bucket)
    arr.push(...bucket)
  })
}

module.exports = bucketSort;