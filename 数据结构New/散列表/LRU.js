/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-24 21:00:22
 * @LastEditTime: 2021-10-25 10:21:00
 * @LastEditors: mTm
 */
const { hashIndex } = require('./utils');

class Node {
  key = null
  data = null
  prev = null
  next = null
  pnext = null
  constructor(key = null, data = null) {
    this.key = key;
    this.data = data
  }
}

class LRU {
  head = null
  footer = null
  length = 0
  factor = 0.75;
  nums = 1;
  minNums = 2;
  // 最大值
  maxNums = 1024
  map = []
  constructor({factor = 0.75, nums = 16, maxNums = 1024}) {  
    this.factor = factor;
    // 容量必须为2的n次幂（或0）
    while (this.nums < nums) {
      this.nums <<= 2;
    }
    this.minNums = this.nums
    this.maxNums = maxNums
    this.init()
  }

  init() {
    this.head = new Node()
    this.footer = this.head
    this.length = 0
    this.map = new Array(this.nums).fill(0).map(v => new Node());
  }

  set(key, data) {
    // 最大值，删除第一个
    if (this.length >= this.maxNums) {
      this.remove(this.head.next.key)
    }
    if (this.remove(key)) {
      this.set(key, data)
      return;
    }

    let index = hashIndex(key, this.nums);
    const newNode = new Node(key, data || key)
    newNode.prev = this.footer
    this.footer.next = newNode
    this.footer = newNode
    let p = this.map[index]
    while (p.pnext) {
      p = p.pnext
    }
    p.pnext = newNode
    this.length++
    this.expand()
  }

  // 扩容
  expand() {
    const isExpand = this.length > this.factor * this.nums;
    if (isExpand) {
      this.nums <<= 1;
      let p = this.head.next;
      this.init()
      while (p) {
        this.set(p.key, p.data)
        p = p.next
      }
    }
  }

  remove(key) {
    let index = hashIndex(key, this.nums);
    let p = this.map[index]
    while (p.pnext && p.pnext.key !== key) {
      p = p.pnext
    }
    if (p.pnext) {
      const _node = p.pnext
      if (_node === this.footer) {
        this.footer = _node.prev
      }
      if (_node === this.head.next) {
        this.head.next = _node.next
      }
      p.pnext = p.pnext.pnext
      _node.prev.next = _node.next
      this.length--
      this.reduce()
      return _node.data
    } else {
      return null
    }
  }

  get(key) {
    const _node = this.remove(key);
    if (_node) {
      this.set(_node.key, _node.data)
      return _node.data
    }
    return null
  }

  // 缩容
  reduce() {
    const isReduce = this.length < this.factor * this.nums / 2;
    if (isReduce && this.minNums < this.nums) {
      this.nums >>= 1;
      let p = this.head.next;
      this.init()
      while (p) {
        this.set(p.key, p.data)
        p = p.next
      }
    }
  }

  allNode() {
    let p = this.head.next
    let k = 0
    const nodes = new Array(this.length)
    while (p) {
      nodes[k++] = p.data
      p = p.next
    }

    return nodes.join('')
  }
}

module.exports = LRU