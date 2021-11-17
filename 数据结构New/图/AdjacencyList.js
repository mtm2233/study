/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-11-14 18:17:29
 * @LastEditTime: 2021-11-17 11:53:38
 * @LastEditors: mTm
 */
const SkipList = require('../跳表/SkipList');

class AdjacencyList {
  vertexs = [];
  constructor({ directed = false } = {}) {
    // 有向
    this.directed = directed;
  }

  init(vertex1, vertex2) {
    if (!this.vertexs[vertex1]) {
      this.vertexs[vertex1] = new SkipList();
    }
    if (!this.directed && !this.vertexs[vertex2]) {
      this.vertexs[vertex2] = new SkipList();
    }
  }

  add(vertex1, vertex2, weight = true) {
    this.init(vertex1, vertex2);
    this.vertexs[vertex1].remove(vertex2);
    this.vertexs[vertex1].insert(vertex2, {
      vertex: vertex2,
      weight,
    });
    if (!this.directed) {
      this.vertexs[vertex2].remove(vertex1);
      this.vertexs[vertex2].insert(vertex1, {
        vertex: vertex1,
        weight,
      });
    }
  }

  remove(vertex1, vertex2) {
    this.init(vertex1, vertex2);
    this.vertexs[vertex1].remove(vertex2);
    if (!this.directed) {
      this.vertexs[vertex2].remove(vertex1);
    }
  }

  isEdge(vertex1, vertex2) {
    this.init(vertex1, vertex2);
    const val = this.vertexs[vertex1].binarySearch(vertex2);
    return val !== -1 ? val.weight : false;
  }

  // ⼊度
  // 表⽰有多少条边指向这个顶点
  inDegree(vertex) {
    return Object.keys(this.vertexs)
      .map(ver => this.vertexs[ver].binarySearch(vertex))
      .filter(v => v !== -1)
      .map(v => (v.weight === true ? v.vertex : v));
  }

  // 出度
  // 表⽰有多少条边是以这个顶点为起点指向其他顶点
  outDegree(vertex) {
    return this.vertexs[vertex]
      .showAll()
      .map(v => (v.weight === true ? v.vertex : v));
  }

  printPath(prev, s, t) {
    const path = [t];
    while (prev[t] && t !== s) {
      path.unshift(prev[t]);
      t = prev[t];
    }
    return path;
  }

  // 广度优先搜索
  // ⽆权图来说，找到的就是最短路径
  bfs(s, t) {
    if (s === t) {
      return [s];
    }
    // 存储已经被访问、但相连的顶点还没有被访问的顶点
    const queue = [];
    // 记录已经被访问的顶点，⽤来避免顶点被重复访问
    const visited = [];
    // 搜索路径
    const prev = [];
    queue.push(s);
    visited[s] = true;
    prev[s] = -1;

    while (queue.length) {
      const v = queue.shift();
      const vData = this.vertexs[v].showAll();
      for (let i = 0; i < vData.length; i++) {
        const { vertex } = vData[i];
        if (!visited[vertex]) {
          prev[vertex] = v;
          if (vertex === t) {
            return this.printPath(prev, s, t);
          }
          visited[vertex] = true;
          queue.push(vertex);
        }
      }
    }
  }

  // 深度优先搜索
  dfs(s, t) {
    const visited = [];
    const prev = [];
    // 是否找到t
    const found = {
      value: false,
    };
    prev[s] = -1;

    this.dfs_c(s, t, visited, prev, found);
    if (found.value) {
      return this.printPath(prev, s, t);
    }
  }

  dfs_c(w, t, visited, prev, found) {
    if (found.value) {
      return;
    }
    if (w === t) {
      found.value = true;
      return;
    }
    visited[w] = true;

    const wData = this.vertexs[w].showAll();
    for (let i = 0; i < wData.length; i++) {
      const { vertex } = wData[i];
      if (!visited[vertex]) {
        prev[vertex] = w;
        this.dfs_c(vertex, t, visited, prev, found);
      }
    }
  }
}

module.exports = AdjacencyList;
