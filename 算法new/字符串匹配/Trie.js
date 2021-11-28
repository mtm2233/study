/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-24 22:23:05
 * @LastEditTime: 2021-11-28 17:21:04
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
    this.root = new Node('/')
    this.chartIndex = new HashMap({
      nums: 64
    });
  }

  insert(str) {
    let p = this.root;
    for (let i = 0; i < str.length; i++) {
      let index = this.chartIndex.get(str[i])
      // char => index （map）
      if (index === null) {
        index = this.chartIndex.length
        this.chartIndex.set(str[i], index)
      }
      // 节点是否存在
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

  findNode(str) {
    let p = this.root;
    let i = 0
    while (p && i < str.length) {
      const index = this.chartIndex.get(str[i++])
      if (index !== null) {
        p = p.children[index]
      } else {
        p = null
      }
    }
    return p
  }

  remove(str, removeAll = false) {
    let p = this.root;
    let i = 0;
    // 最靠近str[str.length]的非叶子节点
    let parent = this.root;
    while (p && i < str.length) {
      const index = this.chartIndex.get(str[i++])
      if (index !== null) {
        if (p.children.length > 1) {
          parent = {
            node: p,
            index
          }
        }
        p = p.children[index]
      } else {
        p = null
      }
    }
    // 删除所以符合将str作为前缀的字符
    if (removeAll) {
      p.children = []
    }
    // 完全匹配才删除
    if (p && p.isEndingChar) {
      // 如果str[str.length]是叶子节点
      if (!p.children.length) {
        parent.node.children[parent.index] = null
      } else {
        p.isEndingChar = false
      }
      return true
    } else {
      return false;
    }
  }

  find(str) {
    const node = this.findNode(str)
    return !!(node && node.isEndingChar)
  }

  showAll(prefix) {
    const node = this.findNode(prefix)
    const strArr = []
    if (node) {
      if (node.isEndingChar) {
        strArr.push(prefix)
      }
      this.showAll_c(node.children, prefix, strArr)
    }
    return strArr
  }

  showAll_c(data, prefix, strArr) {
    if (Array.isArray(data)) {
      data.filter(Boolean).forEach(({ data, isEndingChar, children }) => {
        prefix = `${prefix}${data}`
        // 如果找到了结尾
        if (isEndingChar) {
          strArr.push(prefix)
        }
        this.showAll_c(children, prefix, strArr)
      })
    }
  }
}

module.exports = Trie