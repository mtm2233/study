/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-12 09:51:16
 * @LastEditTime: 2022-01-13 21:13:45
 * @LastEditors: mTm
 */
const { Graph } = require('./Graph');

function dfsSort(graph) {
  // 生成逆邻接表
  const keys = Object.keys(graph.graph);
  const newGraph = new Graph({ isDirected: graph.isDirected });

  for (let i = 0; i < keys.length; i++) {
    const pre = keys[i];
    const vertexs = graph.getVertexs(pre);
    for (let j = 0; j < vertexs.length; j++) {
      const { key: vertex, data } = vertexs[j];
      newGraph.add(vertex, pre, data);
    }
  }

  const visited = {};
  const path = [];

  const dfsSort_c = pre => {
    const vertexs = newGraph.getVertexs(pre);
    for (let i = 0; i < vertexs.length; i++) {
      const { key: vertex } = vertexs[i];
      if (!visited[vertex]) {
        visited[vertex] = true;
        dfsSort_c(vertex);
      }
    }
    path.push(pre);
  };

  const newKeys = Object.keys(newGraph.graph);
  for (let i = 0; i < newKeys.length; i++) {
    const key = newKeys[i];
    if (!visited[key]) {
      visited[key] = true;
      dfsSort_c(key);
    }
  }

  return path.join('->');
}

module.exports = dfsSort;
