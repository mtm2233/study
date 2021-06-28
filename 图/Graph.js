/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-06-28 15:59:10
 * @LastEditTime: 2021-06-28 16:44:03
 * @LastEditors: mTm
 */
// 节点
class Node {
  constructor(data = -1, next = null) {
    this.data = data;
    this.next = next;
  }
}
// 链表
class Linked {
  // 头节点(哨兵)
  head = new Node();
  // 数量
  count = 0;
  insert(data) {
    const addNode = new Node(data);
    let p = this.head;
    while (p.next) {
      p = p.next;
    }
    p.next = addNode;
    ++this.count;
  }
  remove(data) {
    let p = this.head;
    while (p.next && p.next.data !== data) {
      p = p.next;
    }
    // 没有找到
    if (!p.next) {
      return -1;
    }
    --this.count;
    const removeNode = p.next;
    p.next = p.next.next;
    return removeNode;
  }
  toString() {
    let datas = [];
    let p = this.head.next;
    while (p) {
      datas.push(p.data);
      p = p.next;
    }
    console.log(datas.join("-->"));
    return datas;
  }
}
// 图
class Graph {
  obj = [];
  constructor(v = 0) {
    this.v = v;
    this.init();
  }
  init() {
    for (let i = 0; i < this.v; ++i) {
        this.obj[i] = new Linked()
    }
  }
  addEdge(s,t) {
    this.obj[s].insert(t)
    this.obj[t].insert(s)
  }
}

const graph = new Graph(7);
graph.addEdge(0,1)
graph.addEdge(0,5)
console.log(graph.obj);