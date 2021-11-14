/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-11-14 16:42:53
 * @LastEditTime: 2021-11-14 22:39:18
 * @LastEditors: mTm
 */

// 邻接矩阵
class AdjacencyMatrix {
  vertexs = [];
  constructor({ directed = false } = {}) {
    // 有向
    this.directed = directed;
  }

  init(vertex1, vertex2) {
    if (!this.vertexs[vertex1]) {
      this.vertexs[vertex1] = [];
    }
    if (!this.directed && !this.vertexs[vertex2]) {
      this.vertexs[vertex2] = [];
    }
  }

  /* 
    @vertex 顶点
    @weight 权重 
  */
  add(vertex1, vertex2, weight = true) {
    this.init(vertex1, vertex2);
    this.vertexs[vertex1][vertex2] = weight;
    if (!this.directed) {
      this.vertexs[vertex2][vertex1] = weight;
    }
  }

  remove(vertex1, vertex2) {
    this.init(vertex1, vertex2);
    if (!this.directed) {
      this.vertexs[vertex1][vertex2] = false;
      this.vertexs[vertex2][vertex1] = false;
    } else {
      this.vertexs[vertex1][vertex2] = false;
    }
  }

  isEdge(vertex1, vertex2) {
    this.init(vertex1, vertex2);
    return this.vertexs[vertex1][vertex2] || false;
  }

  // ⼊度
  // 表⽰有多少条边指向这个顶点
  inDegree(vertex) {
    return Object.keys(this.vertexs)
      .map(ver => ({
        vertex: ver,
        weight:
          this.vertexs[ver] &&
          (this.vertexs[ver][vertex] || this.vertexs[ver][vertex] === 0)
            ? this.vertexs[ver][vertex]
            : false,
      }))
      .filter(ver => ver.weight !== false);
  }
  // 出度
  // 表⽰有多少条边是以这个顶点为起点指向其他顶点
  outDegree(vertex) {
    return Object.keys(this.vertexs[vertex] || [])
      .filter(ver => this.vertexs[vertex][ver] !== false)
      .map(ver => {
        const weight = this.vertexs[vertex][ver];
        if (weight === true) {
          return ver;
        } else {
          return {
            vertex: ver,
            weight,
          };
        }
      });
  }
}

module.exports = AdjacencyMatrix;
