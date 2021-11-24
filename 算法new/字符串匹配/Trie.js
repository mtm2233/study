/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-24 22:23:05
 * @LastEditTime: 2021-11-24 23:04:00
 * @LastEditors: mTm
 */
const HashMap = require('../../数据结构New/散列表/HashMap')

class Node {
  children = []
  // 是否是字符串结尾字符
  isEndingChar = false
  constructor(data) {
    this.data = data
  }
}

class Trie {
  constructor() {
    this.head = new Node('/')
    this.chartIndex = new HashMap({
      nums: 64
    });
  }

  insert(str) {
    let p = this.head;
    for (let i = 0; i < str.length; i++) {
      let index = this.chartIndex.get(str[i])
      if (index === null) {
        index = this.chartIndex.length
        this.chartIndex.set(str[i], index)
      }
      if (p.children[index]) {
        p = p.children[index]
      } else {
        const newNode = new Node(str[i])
        p.children[index] = newNode
        p = newNode
      }
    }
    p.isEndingChar = true;
  }

  find(str) {
    let p = this.head;
    let i = 0
    while (p && i < str.length) {
      const index = this.chartIndex.get(str[i++])
      if (index !== null) {
        p = p.children[index]
      } else {
        p = null
      }
    }
    return !!(p && p.isEndingChar)
  }

  showAll(prefix) {
    let p = this.head;
    let i = 0;
    const strArr = []
    while (p && i < prefix.length) {
      const index = this.chartIndex.get(prefix[i++])
      if (index !== null) {
        p = p.children[index]
      } else {
        p = null
      }
    }
    if (p) {
      if (p.isEndingChar) {
        strArr.push(prefix)
      }
      this.showAll_c(p.children, prefix, strArr)
    }
    return strArr
  }

  showAll_c(data, prefix, strArr) {
    if (Array.isArray(data)) {
      data.forEach(({ data, isEndingChar, children }) => {
        prefix = `${prefix}${data}`
        if (isEndingChar) {
          strArr.push(prefix)
        }
        this.showAll_c(children, prefix, strArr)
      })
    }
  }
}

module.exports = Trie