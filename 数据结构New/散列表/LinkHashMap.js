/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-23 17:52:24
 * @LastEditTime: 2021-10-24 19:56:40
 * @LastEditors: mTm
 */
const { hashIndex } = require('./utils');
class Node {
  key = null
  data = null
  next = null
  constructor(key = null, data = null) {
    this.key = key;
    this.data = data
  }
}

class Link {
  head = null
  constructor() {
    this.head = new Node()
  }

  set(key, data) {
    let p = this.head
    while (p.next) {
      if (p.next.key === key) {
        p.next.data = data
        return
      }
      p = p.next
    }
    const newNode = new Node(key, data)
    p.next = newNode
  }

  get(key) {
    let p = this.head;
    while (p && p.key !== key) {
      p = p.next
    }
    return p ? p.data : null
  }

  remove(key) {
    let p = this.head;
    while (p.next && p.next.key !== key) {
      p = p.next
    }
    if (p.next && p.next.key === key) {
      const temp = p.next;
      p.next = p.next.next
      return temp
    }
    return null
  }
}

class LinkHashMap {
  factor = 0.75;
  nums = 1;
  minNums = 2;
  length = 0;
  map = [];
  constructor({ factor = 0.75, nums = 10 } = {}) {
    this.factor = factor;
    // 容量必须为2的n次幂（或0）
    while (this.nums < nums) {
      this.nums <<= 2;
    }
    this.minNums = this.nums
    this.init()
  }

  init() {
    this.length = 0
    this.map = new Array(this.nums).fill(0).map(v => new Link());
  }

  set(key, data) {
    let index = hashIndex(key, this.nums);
    this.map[index].set(key, data || key);
    this.length++
    this.expand()
  }

  // 扩容
  expand() {
    const isExpand = this.length > this.factor * this.nums;
    if (isExpand) {
      this.nums <<= 1;
      const oldMap = this.map.filter(Boolean)
      
      this.init()
      for (let i = 0; i < oldMap.length; i++) {
        let p = oldMap[i].head.next;
        while (p) {
          this.set(p.key, p.data)
          p = p.next;
        }
      }
    }
  }

  get(key) {
    let index = hashIndex(key, this.nums);
    return this.map[index].get(key)
  }

  remove(key) {
    let index = hashIndex(key, this.nums);
    const res = this.map[index].remove(key)
    if (res) {
      this.length--;
      this.reduce()
    }
    return res
  }
  
  // 缩容
  reduce() {
    const isReduce = this.length < this.factor * this.nums / 2;
    if (isReduce && this.minNums < this.nums) {
      this.nums >>= 1;
      const oldMap = this.map.filter(Boolean)
      this.init()
      for (let i = 0; i < oldMap.length; i++) {
        let p = oldMap[i].head.next;
        while (p) {
          this.set(p.key, p.data)
          p = p.next;
        }
      }
    }
  }
}

module.exports = LinkHashMap