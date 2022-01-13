/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-12 09:49:41
 * @LastEditTime: 2022-01-13 20:47:35
 * @LastEditors: mTm
 */
function kahn(graph) {
  const inDegree = {};
  const keys = Object.keys(graph.graph);
  // 统计入度
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!inDegree[key] && inDegree[key] !== 0) {
      inDegree[key] = 0;
    }
    const vertexs = graph.getVertexs(key);
    for (let j = 0; j < vertexs.length; j++) {
      const vertex = vertexs[j].key;
      if (!inDegree[vertex] && inDegree[vertex] !== 0) {
        inDegree[vertex] = 1;
      } else {
        inDegree[vertex]++;
      }
    }
  }

  const queue = [];
  Object.keys(inDegree).forEach(key => {
    if (!inDegree[key]) {
      queue.push(key);
    }
  });

  const path = [];
  while (queue.length) {
    const pre = queue.shift();
    path.push(pre);
    const vertexs = graph.getVertexs(pre);
    for (let i = 0; i < vertexs.length; i++) {
      const vertex = vertexs[i].key;
      inDegree[vertex] -= 1;
      if (inDegree[vertex] === 0) {
        queue.push(vertex);
      }
    }
  }
  if (path.length === Object.keys(inDegree).length) {
    return path.join('->')
  }
  return false;
}

module.exports = kahn;
