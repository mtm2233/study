/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-13 20:09:50
 * @LastEditTime: 2021-11-13 20:53:57
 * @LastEditors: mTm
 */
const Heap = require('../../数据结构New/二叉树/Heap')
const { getArr } = require('../../utils')

class TopK {
  constructor(n, data) {
    this.data = new Heap({
      n,
      type: 'min'
    })
    this.maxN = n
    if (Array.isArray(data) && data.length) {
      data.forEach(num => this.add(num))
    }
  }

  add(num) {
    const len = this.data.length
    if (len < this.maxN) {
      this.data.insert(num)
    } else {
      const minVal = this.data.showTop()
      if (num > minVal) {
        this.data.removeTop()
        this.data.insert(num)
      }
    }
  }

  top() {
    return this.data.sort().reverse()
  }
}

const arr = getArr(0,10,8)
console.log(arr);
const topk = new TopK(3, arr)
console.log(topk.top());