/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-04 19:37:52
 * @LastEditTime: 2021-10-04 20:33:52
 * @LastEditors: mTm
 */
// 节点
class Node {
  data = null;
  next = null;
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Link {
  // 头结点
  q = new Node(null, null)
  count = 0
  constructor() {}
  
  push(data) {
    const newNode = new Node(data, null)
    let p = this.q;
    while (p.next) {
      p = p.next
    }
    p.next = newNode;
    this.count++
  }

  remove(data) {
    if (!data || !this.count) {
      return null
    }
    let p = this.q;
    while (p.next && p.next.data !== data) {
      p = p.next
    }
    const temp = p.next;
    if (temp.data) {
      p.next = p.next.next;
      this.count--;
      return temp
    }
  }

  linkToString(head = this.head.next) {
    let p = head;
    const vals = []
    while (p) {
      vals.push(p.data);
      p = p.next
    }
    return vals.join('->');
  }

  get head() {
    return JSON.parse(JSON.stringify(this.q))
  }
}

module.exports = Link