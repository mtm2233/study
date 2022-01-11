/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-08 23:14:53
 * @LastEditTime: 2022-01-11 21:28:16
 * @LastEditors: mTm
 */

// ⼩顶堆/⼤顶堆
class Heap {
  constructor({ type, isWrapHandler }) {
    this.type = type;
    // 自定义排序
    this.isWrapHandler = isWrapHandler;
    this.heap = new Array();
    this.count = 1;
  }

  isWrap(i, j) {
    if (this.isWrapHandler) {
      return this.isWrapHandler(this.heap[i], this.heap[j]);
    }
    return this.type === 'max'
      ? this.heap[i] < this.heap[j]
      : this.heap[i] > this.heap[j];
  }

  wrap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  // 自下往上堆化
  buildDownUp(j) {
    while (j >= 2) {
      const i = j >> 1;
      if (this.isWrap(i, j)) {
        this.wrap(i, j);
        j = i;
      } else {
        return;
      }
    }
  }

  // 自上往下堆化
  buildUpDown(i, j) {
    while (i < j) {
      let max = i;
      const left = i << 1;
      const right = (i << 1) + 1;
      if (left < j && this.isWrap(max, left)) {
        max = left;
      }
      if (right < j && this.isWrap(max, right)) {
        max = right;
      }

      if (max === i) {
        return;
      }
      this.wrap(i, max);
      i = max;
    }
  }

  insert(data) {
    this.heap[this.count] = data;
    this.buildDownUp(this.count);
    this.count++;
  }

  remove() {
    if (!this.count) {
      return null;
    }
    this.count--;
    this.wrap(1, this.count);
    this.buildUpDown(1, this.count);
    const temp = this.heap[this.count];
    this.heap[this.count] = undefined;
    return temp;
  }

  get top() {
    return this.heap[1];
  }

  get length() {
    return this.count - 1;
  }

  sort() {
    const tempHeap = this.heap;
    for (let i = this.count - 1; i >= 1; i--) {
      this.wrap(1, i)
      this.buildUpDown(1, i);
    }
    const data = this.heap.reverse();
    this.heap = tempHeap;
    return data;
  }
}

module.exports = Heap;
