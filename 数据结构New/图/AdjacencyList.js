/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-14 18:17:29
 * @LastEditTime: 2021-11-14 22:20:02
 * @LastEditors: mTm
 */
const SkipList = require('../跳表/SkipList')

class AdjacencyList {
  vertexs = []
  constructor({
    directed = false
  } = {}) {
    // 有向
    this.directed = directed
  }

  init(vertex1, vertex2) {
    if (!this.vertexs[vertex1]) {
      this.vertexs[vertex1] = new SkipList()
    }
    if (!this.directed && !this.vertexs[vertex2]) {
      this.vertexs[vertex2] = new SkipList()
    }
  }

  add(vertex1, vertex2, weight = true) {
    this.init(vertex1, vertex2)
    this.vertexs[vertex1].remove(vertex2)
    this.vertexs[vertex1].insert(vertex2, {
      vertex: vertex2,
      weight
    })
    if (!this.directed) {
      this.vertexs[vertex2].remove(vertex1);
      this.vertexs[vertex2].insert(vertex1, {
        vertex: vertex1,
        weight
      })
    }
  }

  remove(vertex1, vertex2) {
    this.init(vertex1, vertex2)
    this.vertexs[vertex1].remove(vertex2)
    if (!this.directed) {
      this.vertexs[vertex2].remove(vertex1);
    }
  }

  isEdge(vertex1, vertex2) {
    this.init(vertex1, vertex2)
    return this.vertexs[vertex1].binarySearch(vertex2) !== -1;
  }

  // ⼊度 
  // 表⽰有多少条边指向这个顶点
  inDegree(vertex) {
    return Object.keys(this.vertexs).filter(ver => this.vertexs[ver].binarySearch(vertex) !== -1)
  }

  // 出度
  // 表⽰有多少条边是以这个顶点为起点指向其他顶点
  outDegree(vertex) {
    return this.vertexs[vertex].showAll().map(v => v.vertex)
  }
}

module.exports = AdjacencyList