/*
 * @Description: 堆（大顶堆）
 * @Author: mTm
 * @Date: 2021-11-12 22:28:49
 * @LastEditTime: 2021-11-12 23:30:18
 * @LastEditors: mTm
 */
class Heap {
  data = [];
  length = 0;
  constructor() {}

  wrap(index1, index2) {
    const temp = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = temp;
  }

  insert(num) {
    this.data[++this.length] = num;
    let k = this.length;
    while (k / 2 > 0 && num > this.data[k >> 1]) {
      this.wrap(k, k >> 1);
      k = k >> 1;
    }
  }

  removeTop() {
    if (this.length === 0) {
      return -1
    }
    this.wrap(1, this.length--);
    let k = 1;
    // ⾃上往下堆化
    while (true) {
      let maxPos = k;
      if (k * 2 <= this.length && this.data[maxPos] < this.data[k * 2]) {
        maxPos = k * 2
      }
      if (k * 2 + 1 <= this.length && this.data[maxPos] < this.data[k * 2 + 1]) {
        maxPos = k * 2 + 1
      }
      if (maxPos === k) {
        break
      } else {
        this.wrap(k, maxPos)
        k = maxPos
      }
    }
    return this.data[this.length + 1];
  }
}

module.exports = Heap;
