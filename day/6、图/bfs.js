/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-12 09:46:29
 * @LastEditTime: 2022-01-12 21:31:08
 * @LastEditors: mTm
 */
function bfs(graph, s, t) {
  const queue = [];
  const prev = {};
  const visited = {};
  prev[s] = -1;
  visited[s] = true;
  queue.push(s);

  while (queue.length) {
    const pre = queue.shift();
    if (pre === t) {
      break;
    }
    const vertexs = graph.getVertexs(pre);
    for (let i = 0; i < vertexs.length; i++) {
      const { key: vertex } = vertexs[i];
      if (!visited[vertex]) {
        visited[vertex] = true;
        prev[vertex] = pre;
        queue.push(vertex);
      }
    }
  }

  if (prev[t]) {
    const path = [];
    let q = t;
    while (q !== -1) {
      path.unshift(q);
      q = prev[q];
    }
    return path.join('->');
  }
  return null;
}

module.exports = bfs;
