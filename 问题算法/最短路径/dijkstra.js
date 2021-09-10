/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-09-08 09:41:17
 * @LastEditTime: 2021-09-10 09:56:23
 * @LastEditors: mTm
 */

// 边
class Edge {
  sid; // 边的起始顶点编号
  tid; // 边的终止顶点编号
  w; // 权重
  constructor(sid, tid, w) {
    this.sid = sid;
    this.tid = tid;
    this.w = w;
  }
}

// 图
class Graph {
  data = {};
  count = 0;
  // 顶点编号 vertex =》id
  vertexId = new Map();
  idVertex = new Map();

  add(s, t, w) {
    [s, t].forEach(v => {
      if (this.vertexId.get(v) === undefined) {
        this.vertexId.set(v, this.count);
        this.idVertex.set(this.count, v);
        this.count++;
      }
    });
    // 转为下标
    s = this.vertexId.get(s)
    t = this.vertexId.get(t)
    if (this.data[s]) {
      this.data[s].push(new Edge(s, t, w));
    } else {
      this.data[s] = [new Edge(s, t, w)];
    }
  }
}

// 下面这个类是为了dijkstra实现用的
class Vertex {
  id; // 顶点编号ID
  dist; // 从起始顶点到这个顶点的距离
  constructor(id, dist) {
    this.id = id;
    this.dist = dist;
  }
}

// 根据vertex.dist构建小顶堆
class PriorityQueue {
  nodes = [undefined];
  count = 0;
  constructor(data = []) {
    if (Array.isArray(data) && data.length) {
      this.nodes = [undefined, ...data];
      this.count = data.length - 1;
    }
  }
  wrap(i, j) {
    const temp = this.nodes[i];
    this.nodes[i] = this.nodes[j];
    this.nodes[j] = temp;
  }
  // 自上往下堆化
  heapify(i) {
    const { nodes, count } = this;
    while (true) {
      let minKey = i;
      if (i * 2 <= count && nodes[i * 2].dist < node[minKey].dist) {
        minKey = i * 2;
      }
      if (
        i * 2 + 1 <= this.count &&
        nodes[i * 2 + 1].dist < node[minKey].dist
      ) {
        minKey = i * 2 + 1;
      }
      if (minKey === i) {
        break;
      }
      this.wrap(minKey, i);
      i = minKey;
    }
  }
  shift() {
    if (!this.count) {
      return -1;
    }
    this.wrap(1, this.count);
    --this.count;
    this.heapify(1);
    return this.nodes[this.count + 1];
  }
  add(vertex) {
    ++this.count;
    this.nodes[this.count] = vertex;
    let i = this.count;
    // x >> 1 等价于 x/2省略小数
    while (i >> 1 && this.nodes[i].dist < this.nodes[i >> 1].dist) {
      this.wrap(i >> 1, i);
      i = i >> 1;
    }
  }
  // 更新结点的值，并且从下往上堆化，重新符合堆的定义。时间复杂度O(logn)。
  update(vertex) {
    for (let i = 1; i < this.count; i++) {
      if (this.nodes[i] === vertex.id) {
        this.nodes[i].dist = vertex.dist;
        break;
      }
    }
    this.buildHeap();
  }
  isEmpty() {
    return this.count === 0;
  }
  // 将nodes进行堆化
  buildHeap() {
    let i = this.count >> 1;
    for (; i >= 1; --i) {
      this.heapify(i);
    }
  }
}

// 我们用vertexes数组，记录从起始顶点到每个顶点的距离（dist）。起初，
// 我们把所有顶点的dist都初始化为无穷大（也就是代码中的Integer.MAX_VALUE）。
// 我们把起始顶点的dist值初始化为0，然后将其放到优先级队列中。

// 我们从优先级队列中取出dist最小的顶点minVertex，
// 然后考察这个顶点可达的所有顶点（代码中的nextVertex）。
// 如果minVertex的dist值加上minVertex与nextVertex之间边的权重w小于nextVertex当前的dist值，
// 也就是说，存在另一条更短的路径，它经过minVertex到达nextVertex。
// 那我们就把nextVertex的dist更新为minVertex的dist值加上w。
// 然后，我们把nextVertex加入到优先级队列中。重复这个过程，直到找到终止顶点t或者队列为空。

// 从顶点s到顶点t的最短路径
function dijkstra(s, t, graph) {
  s = graph.vertexId.get(s);
  t = graph.vertexId.get(t);
  const v = graph.count
  const gData = graph.data
  const predecessor = new Array(v); // 用来还原最短路径
  const vertexes = new Array(v)
    .fill(0)
    .map((v, i) => new Vertex(i, Number.MAX_SAFE_INTEGER));
  // 小顶堆  
  const queue = new PriorityQueue()
  // 标记是否进入过队列
  const inqueue = new Array(v).fill(false)
  vertexes[s].dist = 0;
  queue.add(vertexes[s])
  inqueue[s] = true
  while (!queue.isEmpty()) {
    const minVertex = queue.shift(); // 取堆顶元素并删除
    if (minVertex.id === t) {
      break; // 最短路径产生了
    }
    const _gData = gData[minVertex.id] || []
    for (let i = 0; i < _gData.length; i++) {
      const e = _gData[i]; // 取出一条minVetex相连的边
      nextVertex = vertexes[e.tid]; // minVertex-->nextVertex
      if (minVertex.dist + e.w < nextVertex.dist) { // 更新next的dist
        nextVertex.dist = minVertex.dist + e.w;
        predecessor[nextVertex.id] = minVertex.id;
        if (inqueue[nextVertex.id]) {
          queue.update(nextVertex)
        } else {
          queue.add(nextVertex);
          inqueue[nextVertex.id] = true
        }
      }
    }
  }
  const path = [s]
  printf_vertex(s,t,predecessor, path)
  console.log(path.map(i => graph.idVertex.get(i)).join('->'));
  return vertexes[t].dist
}

function printf_vertex(s, t, predecessor, path) {
  if (s === t) return;
  printf_vertex(s, predecessor[t], predecessor, path)
  path.push(t)
}


const graph = new Graph();
graph.add('a', 'b', 1)
graph.add('a', 'c', 3)
graph.add('c', 'e', 5)
graph.add('c', 'b', 1)
const minDist = dijkstra('a', 'e', graph)
console.log(minDist);