/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-13 20:55:41
 * @LastEditTime: 2021-11-13 23:06:41
 * @LastEditors: mTm
 */
const Heap = require('../../数据结构New/二叉树/Heap')
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
    // console.log(num, 'num');
    ++this.length;
    const middleIndex = (this.length >> 1) + 1;
    if(this.maxHeap.length < middleIndex) {
      this.maxHeap.insert(num)
    } else {
      this.minHeap.insert(num)
      const maxVal = this.maxHeap.showTop();
      const minVal = this.minHeap.showTop();
      if (minVal < maxVal) {
        this.maxHeap.removeTop()
        this.minHeap.removeTop()
        this.maxHeap.insert(minVal)
        this.minHeap.insert(maxVal)
      }
    }
  }

  medianNum() {
    return this.maxHeap.showTop()
  }
}


const arr = getArr(0,10,6, true)

const median = new Median(arr)

arr.unshift(-1)
console.log(arr);
median.add(-1)
console.log(median.medianNum());