/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-06 09:09:51
 * @LastEditTime: 2022-01-06 15:25:32
 * @LastEditors: mTm
 */
class StackList {
  constructor(count) {
    this.count = count;
    this.stack = new Array(count);
    this.length = 0;
  }

  isFull() {
    return this.length === this.count;
  }

  push(val) {
    if (this.isFull()) {
      return false;
    }
    this.stack[this.length++] = val;
  }

  pop() {
    if (!this.length) {
      return null;
    }
    const temp = this.stack[--this.length]
    this.stack[this.length] = undefined
    return temp;
  }

  getPop() {
    return this.stack[this.length - 1] || null;
  }

  clear() {
    this.stack = new Array(this.count);
    this.length = 0;
  }
}

module.exports = StackList;
