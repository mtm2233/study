/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-08 13:56:57
 * @LastEditTime: 2022-01-08 21:10:55
 * @LastEditors: mTm
 */
class Node {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
    this.pre = null;
  }
}

function hashIndex(key, nums) {
  key = `${key}`;
  let count = 0;
  for (let i = 0; i < key.length; i++) {
    count += key[i].charCodeAt() * (i + 1);
  }
  // 位与也是可以用来取余的，但是有一个条件：除数必须是2的n次幂才行。举例子来说明：
  // 9%8=1
  // 1001 &（1000 - 1）
  // =1001 & 0111
  // =1 // 1001是9的二进制表示，1000是8的二进制表示
  return count & (nums - 1);
}

class LRU {
  constructor(n) {
    this.maxLen = n;
    this.count = 2;
    while (this.count < n) {
      this.count *= 2;
    }
    this.count * 2;
    this.length = 0;
    // 开放寻址
    this.map = new Array(this.count);

    this.head = new Node();
    this.tail = this.head;
  }

  push(node) {
    if (node === this.tail) {
      return;
    }
    node.pre.next = node.next;
    node.next.pre = node.pre;
    node.pre = this.tail;
    node.next = null;
    this.tail.next = node;
    this.tail = node;
  }

  shift() {
    const node = this.head.next;
    node.pre.next = node.next;
    if (node.next) {
      node.next.pre = node.pre;
    }
    return node.data;
  }

  get(key) {
    let index = hashIndex(key);
    while (this.map[index] && this.map[index].key !== key) {
      index++;
    }
    const node = this.map[index];
    if (node) {
      this.push(node);
      return node.data;
    }
    return null;
  }

  set(key, data) {
    // 修改
    const res = this.get(key);
    if (res) {
      this.tail.data = data;
      return;
    }
    // 新增
    if (this.length >= this.maxLen) {
      this.shift();
    }
    let index = hashIndex(key);
    const newNode = new Node(key, data);
    while (this.map[index] && this.map[index].key) {
      index++;
    }
    this.map[index] = newNode;
    this.length++;
    newNode.pre = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  remove(key) {
    let index = hashIndex(key);
    while (this.map[index] && this.map[index].key !== key) {
      index++;
    }
    const node = this.map[index];
    if (node) {
      this.map[index] = {};
      node.pre.next = node.next;
      // 判断是不是结尾
      if (node.next) {
        node.next.pre = node.pre;
      }
      this.length--;
      return node.data;
    }
    return null;
  }

  clear() {
    this.length = 0;
    // 开放寻址
    this.map = new Array(this.count);
  }

  toString() {
    let p = this.head.next;
    const data = [];
    while (p) {
      data.push(p.data);
      p = p.next;
    }
    return data.join('->');
  }
}

module.exports = LRU;
