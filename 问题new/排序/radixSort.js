/*
 * @Description: 基数排序
 * @Author: mTm
 * @Date: 2021-10-11 09:03:05
 * @LastEditTime: 2021-10-11 23:27:31
 * @LastEditors: mTm
 */
// MSD：先从高位开始进行排序，在每个关键字上，可采用计数排序
// LSD：先从低位开始进行排序，在每个关键字上，可采用桶排序

function buckerSort(arr, index, arrHandler) {
  if (arr.length <= 1) {
    arrHandler.push(...arr)
    return
  }
  const len = arr.length;
  const buckers = new Array(10).fill(0).map(() => new Array())

  for (let i = 0; i < len; i++) {
    buckers[arr[i][index]].push(arr[i])
  }

  for (let i = 0; i < 10; i++) {
    // 深度优先
    buckerSort(buckers[i], index + 1, arrHandler)
  }
}

function radixSortMSD(arr) {
  const len = arr.length;
  let arrCopy = arr.map(String)

  // 最长的长度
  let maxLength = arrCopy[0].length;
  for (let i = 1; i < len; i++) {
    const l = arrCopy[i].length
    if (maxLength < l) {
      maxLength = l
    }
  }

  // 补0
  arrCopy = arrCopy.map(v => v.padStart(maxLength, '0'));

  const arrHandler = [];
  buckerSort(arrCopy, 0, arrHandler)
  
  for (let i = 0; i < len; i++) {
    arr[i] = Number(arrHandler[i])
  }
}

// 计数排序
function countSort(arr, index) {
  // 计数
  const count = new Array(10).fill(0)
  const len = arr.length
  for (let i = 0; i < len; i++) {
    count[arr[i][index]]++
  }

  // 累加
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1]
  }

  // 排序
  const handlerArr = new Array(len)
  for (let i = len - 1; i >= 0; i--) {
    handlerArr[--count[arr[i][index]]] = arr[i]
  }

  return  handlerArr
}

function radixSortLSD(arr) {
  const len = arr.length;
  let arrCopy = arr.map(String)

  // 最长的长度
  let maxLength = arrCopy[0].length;
  for (let i = 1; i < len; i++) {
    const l = arrCopy[i].length
    if (maxLength < l) {
      maxLength = l
    }
  }

  // 补0
  arrCopy = arrCopy.map(v => v.padStart(maxLength, '0'));

  while (maxLength) {
    arrCopy = countSort(arrCopy, --maxLength)
  }
  
  for (let i = 0; i < len; i++) {
    arr[i] = Number(arrCopy[i])
  }
}

module.exports = {
  radixSortMSD,
  radixSortLSD,
}