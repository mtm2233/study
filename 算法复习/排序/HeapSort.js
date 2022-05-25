/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-12 23:31:52
 * @LastEditTime: 2021-11-12 23:53:53
 * @LastEditors: mTm
 */
class Heap {
  constructor(arr) {
    this.data = arr;
    this.length = arr.length;
    this.data.unshift('')
  }

  wrap(index1, index2) {
    const temp = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = temp;
  }

  // 从上往下堆化
  heapify(i, n) {
    while (true) {
      let maxPos = i;
      if (i * 2 <= n && this.data[maxPos] < this.data[i * 2]) {
        maxPos = i * 2
      }
      if (i * 2 + 1 <= n && this.data[maxPos] < this.data[i * 2 + 1]) {
        maxPos = i * 2 + 1
      }

      if (maxPos === i) {
        return;
      } else {
        this.wrap(i, maxPos);
        i = maxPos
      }
    }
  }

  // 构建堆
  buildHeap() {
    for (let n = (this.length << 1) - 1; n > 0; n--) {
      this.heapify(n, this.length)
    }
  }

  sort() {
    for (let n = this.length; n > 1; n--) {
      this.wrap(1, n)
      this.heapify(1, n - 1)
    }
    this.data.shift()
  }
}

function heapSort(data) {
  const heap = new Heap(data)
  heap.buildHeap()
  heap.sort()
}

module.exports = heapSort