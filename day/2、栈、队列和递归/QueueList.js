/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-06 09:13:37
 * @LastEditTime: 2022-01-06 16:44:31
 * @LastEditors: mTm
 */
class QueueList {
  constructor(count) {
    this.count = count;
    this.length = 0;
    this.queue = new Array(count);
  }

  isFull() {
    return this.count === this.length;
  }

  push(val) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.length++] = val;
  }

  unshift() {
    if (!this.length) {
      return null;
    }
    const temp = this.queue[0];
    for (let i = 1; i < this.length; i++) {
      this.queue[i - 1] = this.queue[i];
    }
    this.queue[--this.length] = undefined;
    return temp;
  }

  clear() {
    this.length = 0;
    this.queue = new Array(this.count);
  }
}

module.exports = QueueList;
