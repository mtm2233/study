/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-13 18:13:11
 * @LastEditTime: 2021-11-13 18:35:01
 * @LastEditors: mTm
 */
const Heap = require('../../数据结构New/二叉树/Heap')

const arr1 = [3,5,8,10]
const arr2 = [2,6,7,9]
const arr3 = [1,5,9,10]

function mergeOrderArr(data) {
  // 已合并数组的下标
  const indexs = []
  // 合并后的数组
  const mergeArr = []
  const minHead = new Heap({
    heapTypeHandler(item1, item2) {
      return item1.num < item2.num
    }
  })

  // init
  Object.keys(data).forEach(key => {
    minHead.insert({
      name: key,
      num: data[key][0]
    })
    indexs[key] = 1
  })
  
  while (minHead.length) {
    const val = minHead.removeTop()
    if (val === -1) {
      break;
    }
    const { name, num } = val;
    mergeArr.push(num);
    const nextVal = data[name][indexs[name]++];
    if (nextVal || nextVal === 0) {
      minHead.insert({
        name,
        num: nextVal,
      })
    }
  }

  return mergeArr;
}

const mergeArr = mergeOrderArr([arr1, arr2, arr3])
console.log(mergeArr);