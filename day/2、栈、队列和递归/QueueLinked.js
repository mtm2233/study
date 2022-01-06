/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-06 09:13:57
 * @LastEditTime: 2022-01-06 16:59:38
 * @LastEditors: mTm
 */

class Node {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
  }
}
class QueueLinked {
  constructor(count) {
    this.count = count;
    this.length = 0;
    this.head = new Node();
  }

  isPull() {
    return this.count === this.length;
  }

  push(val) {
    if (this.isPull()) {
      return false;
    }
    let q = this.head;
    while (q && q.next) {
      q = q.next;
    }
    q.next = new Node(val, val);
    this.length++;
  }

  unshift() {
    if (!this.length) {
      return null;
    }
    const temp = this.head.next;
    this.head.next = temp.next;
    this.length--;
    return temp;
  }

  clear() {
    this.length = 0;
    this.head = new Node();
  }

  toString() {
    let q = this.head.next;
    const arr = [];
    while (q) {
      arr.push({
        key: q.key,
        data: q.data,
      });
      q = q.next;
    }
    return arr.map(({ key, data }) => `${data}`).join('->');
  }
}

module.exports = QueueLinked;
