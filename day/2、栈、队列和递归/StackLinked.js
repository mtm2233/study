/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-06 09:10:14
 * @LastEditTime: 2022-01-06 15:10:27
 * @LastEditors: mTm
 */
class Node {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
  }
}

class StackLinked {
  constructor(count) {
    this.count = count;
    this.length = 0;
    this.head = new Node();
  }

  isFull() {
    return this.count === this.length;
  }

  push(val) {
    if (this.isFull()) {
      return false;
    }
    let q = this.head;
    while (q && q.next) {
      q = q.next;
    }
    this.length++;
    q.next = new Node(val, val);
  }

  pop() {
    if (!this.length) {
      return null;
    }
    let q = this.head.next;
    while (q && q.next && q.next.next) {
      q = q.next;
    }

    if (q) {
      const temp = q.next;
      q.next = q.next.next;
      this.length--;
      return temp.data;
    }
    return null;
  }

  clear() {
    this.length = 0;
    this.head = new Node();
  }
}

module.exports = StackLinked;
