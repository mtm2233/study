/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-12 09:47:14
 * @LastEditTime: 2022-01-14 13:42:29
 * @LastEditors: mTm
 */
const Heap = require('../5、二叉树和堆/Heap');

function dijkstra(graph, s, t) {
  const heap = new Heap({
    type: 'min',
    isWrapHandler: (item1, item2) => item1.dist > item2.dist,
  });
  const prev = {};
  const minDist = {};
  prev[s] = -1;
  minDist[s] = 0;
  heap.insert({
    vertex: s,
    dist: 0,
  });

  while (heap.length) {
    const pre = heap.remove();
    if (pre.vertex === t) {
      break;
    }
    const vertexs = graph.getVertexs(pre.vertex);
    for (let i = 0; i < vertexs.length; i++) {
      const { key: vertex, data: weight } = vertexs[i];
      const nextDist =
        minDist[vertex] !== undefined ? minDist[vertex] : Number.MAX_VALUE;
      // 我来解释⼀下更新条件仍然和 dijkstra 算法⼀致的原因，有错误还请⼤家指出
      // 实际上不管当前点从哪⼀个点经过，它与终点的曼哈顿距离都是不变的，所以这部分不需要管
      if (pre.dist + weight < nextDist) {
        minDist[vertex] = pre.dist + weight;
        if (nextDist === Number.MAX_VALUE) {
          heap.insert({
            vertex,
            dist: pre.dist + weight,
          });
        } else {
          heap.update(item => {
            if (item.vertex === vertex) {
              item.dist = pre.dist + weight;
              return true;
            }
          });
        }
        prev[vertex] = pre.vertex;
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
    return {
      path: path.join('->'),
      dist: minDist[t],
    };
  }
  return null;
}

module.exports = dijkstra;
