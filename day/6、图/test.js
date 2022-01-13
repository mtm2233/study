/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-12 09:29:50
 * @LastEditTime: 2022-01-13 22:24:00
 * @LastEditors: mTm
 */
/* 图 */

// 实现有向图、⽆向图、有权图、⽆权图的邻接矩阵和邻接表表⽰⽅法
const { GraphList, Graph } = require('./Graph');

// 邻接矩阵 //
// 无向图
// const graphList = new GraphList({vertexNum: 26})
// graphList.add('a', 'b')
// graphList.add('a', 'c')
// graphList.remove('a', 'b')
// console.log(graphList.hasEdge('a', 'c'));
//有向图
// const graphList = new GraphList({ isDirected: true, vertexNum: 26 });
// graphList.add('a', 'b');
// graphList.add('a', 'c');
// graphList.remove('a', 'b');
// console.log(graphList.hasEdge('a', 'b'));
//无向带权图
// const graphList = new GraphList({vertexNum: 26})
// graphList.add('a', 'b', 1)
// graphList.add('a', 'c', 7)
// console.log(graphList.remove('a', 'b'));
// console.log(graphList.hasEdge('a', 'b'));
//有向带权图
// const graphList = new GraphList({isDirected: true, vertexNum: 2})
// graphList.add('a', 'b', 1)
// graphList.add('a', 'c', 7)
// console.log(graphList.remove('a', 'b'));
// console.log(graphList.hasEdge('a', 'b'));

// 邻接表 //
// 无向图
// const graph = new Graph();
// graph.add('a', 'b');
// graph.add('a', 'c');
// graph.remove('a', 'b');
// console.log(graph.hasEdge('a', 'b'));

// 有向图
// const graph = new Graph({ isDirected: true });
// graph.add('a', 'b');
// graph.add('a', 'c');
// graph.remove('a', 'b');
// console.log(graph.hasEdge('a', 'b'));

// 无向带权图
// const graph = new Graph();
// graph.add('a', 'b', 12);
// graph.add('a', 'c', 15);
// console.log(graph.remove('a', 'b'));
// console.log(graph.hasEdge('a', 'b'));

// 有向带权图
// const graph = new Graph({ isDirected: true });
// graph.add('a', 'b', 12);
// graph.add('a', 'c', 15);
// console.log(graph.remove('a', 'b'));
// console.log(graph.hasEdge('b', 'a'));

// 实现图的深度优先搜索、⼴度优先搜索
// const graph = new Graph()
// graph.add('a', 'b')
// graph.add('a', 'c')
// graph.add('b', 'c')
// graph.add('e', 'f')
// graph.add('d', 'b')

// DFS
// const dfs = require('./dfs');
// console.log(dfs(graph, 'a', 'c'));

// BFS
// const bfs = require('./bfs');
// console.log(bfs(graph, 'a', 'c'));

// 实现Dijkstra算法、A*算法
const dijkstra = require('./dijkstra');
// const graph = new Graph();
// graph.add('a', 'b', 1);
// graph.add('a', 'c', 2);
// graph.add('b', 'd', 5);
// graph.add('d', 'e', 1);
// graph.add('c', 'e', 100);

// console.log(dijkstra(graph, 'a', 'e'));

const aStar = require('./aStar');
const graph = new Graph({
  isDirected: true,
});
graph.add('a', 'd', {
  weight: 3,
  x: 3,
  y: 3
});
graph.add('a', 'b', {
  weight: 1,
  x: 1,
  y: 1
});
graph.add('b', 'd', {
  weight: 4,
  x: 4,
  y: 4
});
graph.add('d', 'e', {
  weight: 6,
  x: 5,
  y: 5
});

console.log(aStar(graph, 'a', 'e', { x: 5, y: 5}));

const graph1 = new Graph({
  isDirected: true,
});
graph1.add('a', 'd', 3);
graph1.add('a', 'b', 1);
graph1.add('b', 'd', 4);
graph1.add('d', 'e', 6);
console.log(dijkstra(graph1, 'a', 'e'));

// 实现拓扑排序的Kahn算法、DFS算法
// const kahn = require('./kahn');
// const graph = new Graph({ isDirected: true });
// graph.add('a', 'c')
// graph.add('a', 'd')
// graph.add('d', 'c')
// graph.add('d', 'e')
// graph.add('c', 'e')
// graph.add('b', 'f')

// graph.add('a', 'b')
// graph.add('b', 'c')
// graph.add('c', 'd')
// graph.add('d', 'e')

// console.log(kahn(graph));

// const dfsSort = require('./dfsSort');

// console.log(dfsSort(graph));