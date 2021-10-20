/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-20 18:54:26
 * @LastEditTime: 2021-10-20 20:55:54
 * @LastEditors: mTm
 */

// 最大索引层
const MAX_LEVEL = 50
// 索引进阶
const SKIPLIST_P = 1/2

class Node {
  key = Number.MIN_SAFE_INTEGER
  data = null
  max_level = 1
  refer = new Array(MAX_LEVEL)

  constructor(config = {}) {
    const keys = ['key', 'data', 'refer', 'max_level'];
    keys.forEach(key => {
      if (config[key]) {
        this[key] = config[key]
      }
    })
  }
}

class SkipList {
  // 最大索引层级
  levelCount = 1
  head = null
  constructor() {
    this.head = new Node()
  }

  randomLevel() {
    let level = 1;
    while (level < MAX_LEVEL && Math.random() < SKIPLIST_P) {
      level++
    }
    return level
  }

  insert(key, data) {
    const level = this.randomLevel()
    // 要插入的节点
    const newNode = new Node({
      key,
      data,
      max_level: level
    })

    // 要插入的节点的前驱
    const update = new Array(this.level)
    let p = this.head
    // 寻找前驱
    for (let i = level - 1; i >= 0; i--) {
      while (p.refer[i] && p.refer[i].key < key) {
        p = p.refer[i]
      }
      update[i] = p
    }

    // 插入节点
    for (let i = level - 1; i >= 0; i--) {
      newNode.refer[i] = update[i].refer[i]
      update[i].refer[i] = newNode
    }

    if (level > this.levelCount) {
      this.levelCount = level
    }
  }

  remove(key) {
    // 前驱节点
    const update = new Array(this.levelCount)
    let p = this.head
    let _node;
    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.refer[i] && p.refer[i].key < key) {
        p = p.refer[i]
      }
      update[i] = p
    }

    // 判断要删除的节点是否存在
    if (update[0].refer[0] && update[0].refer[0].key === key) {
      _node = update[0].refer[0]
      for (let i = this.levelCount - 1; i >= 0; i--) {
        while (update[i].refer[i] && update[i].refer[i].key === key) {
          update[i].refer[i] = update[i].refer[i].refer[i]
        }
      }
      this.levelCount = this.head.refer.filter(Boolean).length

      return _node.data
    }
    return -1
  }

  // 二分
  binarySearch(key) {
    let p = this.head
    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.refer[i] && p.refer[i].key < key) {
        p = p.refer[i]
      }
      if (p.refer[i] && p.refer[i].key === key) {
        return p.refer[i].data
      }
    }
    return -1
  }

  // 顺序查找
  linkSearch(key) {
    let p = this.head.refer[0]
    while (p) {
      if (p.key === key) {
        return p.data
      }
      p = p.refer[0]
    }
    return -1
  }

  // 查看所以
  showAll() {
    let p = this.head.refer[0]
    const datas = []

    while (p) {
      datas.push(p.data)
      p = p.refer[0]
    }

    return datas.join('->')
  }
}

module.exports = SkipList