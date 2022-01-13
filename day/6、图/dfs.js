/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-12 09:44:51
 * @LastEditTime: 2022-01-12 21:29:24
 * @LastEditors: mTm
 */
function dfs(graph, s, t) {
  // 已访问的节点
  const visited = {};
  const prev = {};
  prev[s] = -1;
  let isEnding = false;

  const dfs_c = pre => {
    
    visited[pre] = true;
    if (pre === t) {
      isEnding = true;
      return;
    }
    // 可访问的节点
    const vertexs = graph.getVertexs(pre);
    for (let i = 0; i < vertexs.length; i++) {
      const { key: vertex } = vertexs[i];
      // 没有访问过
      if (!visited[vertex]) {
        prev[vertex] = pre;
        dfs_c(vertex);
      }
    }
  };

  dfs_c(s);

  if (isEnding) {
    const path = [];
    let p = t;
    while (p !== -1) {
      path.unshift(p);
      p = prev[p];
    }
    return path.join('->');
  }
  return null;
}

module.exports = dfs;
