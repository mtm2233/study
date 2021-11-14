/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-14 16:42:53
 * @LastEditTime: 2021-11-14 17:26:35
 * @LastEditors: mTm
 */

// 邻接矩阵
class AdjacencyMatrix {
  vertexs = []
  constructor({
    directed = false
  } = {}) {
    // 有向
    this.directed = directed
  }

  init(vertex1, vertex2) {
    if (!this.vertexs[vertex1]) {
      this.vertexs[vertex1] = []
    }
    if (!this.directed && !this.vertexs[vertex2]) {
      this.vertexs[vertex2] = []
    }
  }

  /* 
    @vertex 顶点
    @weight 权重 
  */
  add( vertex1, vertex2, weight = true) {
    this.init(vertex1, vertex2)
    if (!this.directed) {
      this.vertexs[vertex1][vertex2] = weight;
      this.vertexs[vertex2][vertex1] = weight;
    } else {
      this.vertexs[vertex1][vertex2] = weight;
    }
  }


  remove(vertex1, vertex2) {
    this.init(vertex1, vertex2)
    if (!this.directed) {
      this.vertexs[vertex1][vertex2] = false;
      this.vertexs[vertex2][vertex1] = false;
    } else {
      this.vertexs[vertex1][vertex2] = false;
    }
  }

  isEdge(vertex1, vertex2) {
    this.init(vertex1, vertex2)
    return this.vertexs[vertex1][vertex2] || false
  }

  // ⼊度 
  // 表⽰有多少条边指向这个顶点
  inDegree(vertex) {
    return Object.keys(this.vertexs).filter(ver => this.vertexs[ver] && this.vertexs[ver][vertex])
  }
  // 出度
  // 表⽰有多少条边是以这个顶点为起点指向其他顶点
  outDegree(vertex) {
    return Object.keys(this.vertexs[vertex] || []).filter(Boolean)
  }
}

module.exports = AdjacencyMatrix