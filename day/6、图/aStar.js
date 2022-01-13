/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-12 09:48:51
 * @LastEditTime: 2022-01-13 22:27:45
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
  minDist[s] = {
    dist: 0,
    f: 0,
  };
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
      const nextDist = minDist[vertex]
        ? minDist[vertex].dist
        : {
            dist: Number.MAX_VALUE,
          };
      if (preDist.dist + data.weight < nextDist.dist) {
        if (nextDist.dist === Number.MAX_VALUE) {
          minDist[vertex] = {
            dist: preDist.dist + data.weight,
            f: preDist.dist + data.weight + hManhattan(data, tPos),
          };
          heap.insert({
            vertex,
            f: minDist[vertex].f,
          });
        } else {
          nextDist.dist = preDist.dist + data.weight;
          nextDist.f = nextDist.dist + hManhattan(data, tPos);
          heap.update(item => {
            if (item.vertex === vertex) {
              item.f = nextDist.f;
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
