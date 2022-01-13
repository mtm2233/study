/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-12 09:31:47
 * @LastEditTime: 2022-01-13 16:17:32
 * @LastEditors: mTm
 */
/**邻接矩阵 */

// 无向图/有向图/无向带权图/有向带权图
class GraphList {
  constructor({ isDirected = false, vertexNum = 26 } = {}) {
    this.graph = new Array(vertexNum)
      .fill(0)
      .map(() => new Array(vertexNum).fill(false));
    this.mapCode = new Map();
    this.vertexNum = vertexNum;
    this.vertexLen = -1;
    // 有向图
    this.isDirected = isDirected;
  }

  add(v1, v2, weighted = true) {
    let index1 = this.mapCode.get(v1);
    let index2 = this.mapCode.get(v2);
    if (index1 === undefined) {
      index1 = ++this.vertexLen;
      this.mapCode.set(v1, this.vertexLen);
    }
    if (index2 === undefined) {
      index2 = ++this.vertexLen;
      this.mapCode.set(v2, this.vertexLen);
    }

    if (this.vertexLen >= this.vertexNum) {
      throw new Error('vertex总数超出vertexNum');
    }

    this.graph[index1][index2] = weighted;
    if (!this.isDirected) {
      this.graph[index2][index1] = weighted;
    }
  }

  remove(v1, v2) {
    const index1 = this.mapCode.get(v1);
    const index2 = this.mapCode.get(v2);
    const res = this.hasEdge(v1, v2, false);
    if (res === false) {
      return null;
    }
    if (this.graph[index1]) {
      this.graph[index1][index2] = false;
    }

    if (!this.isDirected) {
      this.graph[index2][index1] = false;
    }
    return res;
  }

  hasEdge(v1, v2, isBoolean = true) {
    const index1 = this.mapCode.get(v1);
    const index2 = this.mapCode.get(v2);
    if (index1 !== undefined && index2 !== undefined) {
      let res = this.graph[index1][index2];
      if (!res && res !== 0) {
        res = false;
      }
      return isBoolean ? !!res : res;
    }
    return false;
  }
}

/**邻接表 */

const { LinkList } = require('../1、数组和链表/LinkedList');

// 无向图/有向图/无向带权图/有向带权图
class Graph {
  constructor({ isDirected = false } = {}) {
    this.graph = new Array();
    this.vertexLen = -1;

    // 有向图
    this.isDirected = isDirected;
  }

  getVertexs(ver) {
    if (!this.graph[ver]) {
      return [];
    }
    return this.graph[ver].allNodes();
  }

  add(v1, v2, weighted = true) {
    if (!this.graph[v1]) {
      this.vertexLen++;
      this.graph[v1] = new LinkList();
    }
    this.graph[v1].add(v2, weighted);

    if (!this.isDirected) {
      if (!this.graph[v2]) {
        this.vertexLen++;
        this.graph[v2] = new LinkList();
      }
      this.graph[v2].add(v1, weighted);
    }
  }

  remove(v1, v2) {
    const res = this.hasEdge(v1, v2, false);
    if (res === false) {
      return null;
    }
    if (this.graph[v1]) {
      this.graph[v1].remove(v2);
    }
    if (!this.isDirected && this.graph[v2]) {
      this.graph[v2].remove(v1);
    }
    return res;
  }

  hasEdge(v1, v2, isBoolean = true) {
    if (!this.graph[v1]) {
      let res = this.graph[v1].get(v2);
      if (!res && res !== 0) {
        res = false;
      }
      return isBoolean ? !!res : res;
    }
    return false;
  }
}

module.exports = {
  GraphList,
  Graph,
};
