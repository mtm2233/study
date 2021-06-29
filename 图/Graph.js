/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-06-28 15:59:10
 * @LastEditTime: 2021-06-29 10:50:51
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
  toString(clg = false) {
    let datas = [];
    let p = this.head.next;
    while (p) {
      datas.push(p.data);
      p = p.next;
    }
    clg && console.log(datas.join("-->"));
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
      this.obj[i] = new Linked();
    }
  }
  addEdge(s, t) {
    this.obj[s].insert(t);
    this.obj[t].insert(s);
  }
  // 广度优先搜索
  // s-t的最低距离
  bfs(s, t) {
    if (s == t) {
      return;
    }
    // queue是一个队列，用来存储已经被访问、但相连的顶点还没有被访问的顶点
    let queue = [];
    // visited是用来记录已经被访问的顶点，用来避免顶点被重复访问。
    let visited = new Array(this.v).fill(0);
    // prev用来记录搜索路径
    let prev = new Array(this.v).fill(-1);
    // 访问s
    queue.push(s)
    visited[s] = 1;
    while (queue.length) {
      const i = queue.shift();
      // 避免重复访问
      const vertexs = this.obj[i].toString().filter((i) => !visited[i]);
      // 记录访问状态，访问顶点
      vertexs.forEach(vertex => {
        prev[vertex] = i
        visited[vertex] = 1
      })
      // 加入队列
      queue.push(...vertexs);
      if (i === t) {
        // 输出路径
        return this.printf(prev, s, t)
      }
    }
    return -1
  }
  printf(prev, s, t) {
    const path = []
    const printf_c = (prev, s, t) => {
      if (prev[t] !== -1 && t !== s) {
        printf_c(prev, s, prev[t])
      }
      path.push(t)
    }
    printf_c(prev, s, t)
    return path
  }
}

const graph = new Graph(10);
graph.addEdge(0, 1);
graph.addEdge(0, 5);
graph.addEdge(1, 6);
graph.addEdge(6, 9);
console.log(graph.bfs(0, 9));
// console.log(graph.obj);
