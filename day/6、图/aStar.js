/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-12 09:48:51
 * @LastEditTime: 2022-01-14 13:43:48
 * @LastEditors: mTm
 */
const Heap = require('../5、二叉树和堆/Heap');

function hManhattan(ver1, ver2) {
  return Math.abs(ver2.x - ver1.x) + Math.abs(ver2.y - ver1.y);
}

function aStar(graph, s, t, tPos) {
  const heap = new Heap({
    type: 'min',
    isWrapHandler: (item1, item2) => item1.f > item2.f,
  });
  const prev = {};
  const minDist = {};
  prev[s] = -1;
  minDist[s] = 0;
  heap.insert({
    vertex: s,
    f: 0,
  });

  while (heap.length) {
    const pre = heap.remove();
    const vertexs = graph.getVertexs(pre.vertex);
    for (let i = 0; i < vertexs.length; i++) {
      const { key: vertex, data } = vertexs[i];
      const preDist = minDist[pre.vertex];
      const nextDist = minDist[vertex] !== undefined ? minDist[vertex] : Number.MAX_VALUE;
      // 我来解释⼀下更新条件仍然和 dijkstra 算法⼀致的原因，有错误还请⼤家指出
      // 实际上不管当前点从哪⼀个点经过，它与终点的曼哈顿距离都是不变的，所以这部分不需要管
      if (preDist + data.weight < nextDist) {
        minDist[vertex] = preDist + data.weight;
        if (nextDist === Number.MAX_VALUE) {
          heap.insert({
            vertex,
            f: minDist[vertex] + hManhattan(data, tPos),
          });
        } else {
          heap.update(item => {
            if (item.vertex === vertex) {
              item.f = minDist[vertex] + hManhattan(data, tPos);
              return true;
            }
          });
        }
        prev[vertex] = pre.vertex;
      }
      if (vertex === t) {
        heap.clear(); // 清空heap，才能推出while循环
        break;
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

module.exports = aStar;
