/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-28 17:03:00
 * @LastEditTime: 2021-11-28 19:54:11
 * @LastEditors: mTm
 */
const Trie = require('./Trie')

class AcNode {
  children = []
  // 是否是字符串结尾字符
  isEndingChar = false;
  // 失效指针
  fail = null;
  // 当isEndingChar=true时，记录模式串⻓度
  length = -1;
  constructor(data) {
    this.data = data
  }
}

class AC extends Trie {
  constructor() {
    super(...arguments)
    this.root = new AcNode('/')
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
        const newNode = new AcNode(str[i])
        p.children[index] = newNode
        p = newNode
      }
    }
    p.isEndingChar = true;
    p.length = str.length
  }
  // 构建失效指针
  buildFail() {
    const queue = []
    queue.push(this.root)
    while (queue.length) {
      const p = queue.shift()
      for (let i = 0; i < p.children.length; i++) {
        const pc = p.children[i]
        if(!pc) {
          continue
        }
        // 根节点的子节点的失效指针指向根节点
        if (p === this.root) {
          pc.fail = this.root
        } else {
          let q = p.fail;
          while (q) {
            const ind = this.chartIndex.get(pc.data);
            if(q[ind]) {
              pc.fail = q;
              break
            }
            q = q.fail
          }
          // 还没有找到相同字符的⼦节点，就让节点pc的失败指针指向root
          if (!q) {
            pc.fail = this.root;
          }
        }

        queue.push(pc)
      }
    }
  }
  // 过滤
  // main是主串
  filter(main) {
    // 转为数组，方便替换*
    main = main.split('')
    const len = main.length;
    let p = this.root
    for (let i = 0; i < len; i++) {
      const ind = this.chartIndex.get(main[i])
      // 如果没有匹配的，从root开始重新匹配
      if (!ind && ind !== 0) {
        p = this.root
        continue;
      }
      while (!p.children[ind] && p !== this.root) {
        // 失败指针发挥作⽤的地⽅
        p = p.fail
      }
      p = p.children[ind]
      // 如果没有匹配的，从root开始重新匹配
      if(!p) {
        p = this.root
      }
      let tmp = p
      // 替换可以匹配的模式串
      while (tmp !== this.root) {
        if (tmp.isEndingChar) {
          // console.log(tmp.data, tmp.length);
          const pos = i - tmp.length + 1;
          // 替换 *
          for (let j = 0; j < tmp.length; j++) {
            main[j + pos] = '*'
          }
        }
        tmp = tmp.fail
      }
    }
    return main.join('')
  }
}

module.exports = AC