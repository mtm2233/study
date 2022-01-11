/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-08 23:19:24
 * @LastEditTime: 2022-01-11 21:51:55
 * @LastEditors: mTm
 */
const Heap = require('./Heap');

class TopK {
  constructor(count) {
    this.count = count;
    this.heap = new Heap({
      type: 'min',
    });
  }

  add(val) {
    if (this.count > this.heap.length) {
      this.heap.insert(val);
      return;
    }

    if (val > this.heap.top) {
      this.heap.remove();
      this.heap.insert(val);
    }
  }

  get data() {
    return this.heap.sort().reverse();
  }
}

module.exports = TopK;
