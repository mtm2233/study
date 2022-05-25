/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-13 20:55:41
 * @LastEditTime: 2021-11-14 13:17:33
 * @LastEditors: mTm
 */
const Heap = require('../../数据结构复习/二叉树/Heap')
const { getArr } = require('../../utils')

class Median {
  constructor(data) {
    this.minHeap = new Heap({
      type: 'min'
    })
    this.maxHeap = new Heap({
      type: 'max'
    })
    this.length = 0;
    if (Array.isArray(data)) {
      data.forEach(num => this.add(num))
    }
  }

  add(num) {
    ++this.length;
    const middleIndex = (this.length >> 1) + 1;

    this.minHeap.insert(num)
    const maxVal = this.maxHeap.showTop();
    const minVal = this.minHeap.showTop();
    if (this.maxHeap.length < middleIndex) {
      this.minHeap.removeTop()
      this.maxHeap.insert(minVal)
    } else if (minVal < maxVal) {
      this.maxHeap.removeTop()
      this.minHeap.removeTop()
      this.maxHeap.insert(minVal)
      this.minHeap.insert(maxVal)
    }
  }

  medianNum() {
    return this.maxHeap.showTop()
  }
}


const arr = getArr(0,10,5, true)

const median = new Median(arr)

// arr.unshift(-1)
console.log(arr);
// median.add(-1)
console.log(median.medianNum());