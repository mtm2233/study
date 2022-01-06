/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-06 09:14:14
 * @LastEditTime: 2022-01-06 19:11:19
 * @LastEditors: mTm
 */
class QueueCircular {
  constructor(count) {
    this.count = count;
    this.length = 0;
    this.queue = new Array(this.count);
    this.head = 0;
    this.tail = 0;
  }

  isFull() {
    return (this.tail + 1) % this.count === this.head;
  }

  push(val) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = val;
    this.tail = (this.tail + 1) % this.count;
    this.length++;
  }

  unshift() {
    if (!this.length) {
      return null;
    }
    const temp = this.queue[this.head];
    this.head++;
    this.length--;
    return temp;
  }

  clear() {
    this.length = 0;
    this.queue = new Array(this.count);
    this.head = 0;
    this.tail = 1;
  }

  get data() {
    const data = [];
    let p = this.head;
    let q = this.tail;
    let i = 0;
    while (p !== q) {
      data[i++] = this.queue[p];
      p = (p + 1) % this.count;
    }
    return data;
  }
}

module.exports = QueueCircular;
