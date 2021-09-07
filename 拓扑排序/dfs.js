/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-09-06 22:46:44
 * @LastEditTime: 2021-09-07 09:29:47
 * @LastEditors: mTm
 */
class Graph {
  data = {}
  insert(s, t) {
    if (this.data[s]) {
      this.data[s].push(t)
    } else {
      this.data[s] = [t]
    }
  }
}

function topoSortByDFS(graph) {
  // 第一部分是通过邻接表构造逆邻接表。邻接表中，边s->t表示s先于t执行，
  // 也就是t要依赖s。在逆邻接表中，边s->t表示s依赖于t，s后于t执行。
  const inverseAdj = {}
  const keys = Object.keys(graph.data)
  for(let i = 0; i < keys.length; i++) {
    const _data = graph.data[keys[i]]
    for (let j = 0; j < _data.length; j++) {
      if(inverseAdj[_data[j]]) {
        inverseAdj[_data[j]].push(keys[i])
      } else {
        inverseAdj[_data[j]] = [keys[i]]
      }
    }
  }

  const path = []
  // 定点是否被访问
  const visited = {}
  const _keys = Object.keys(inverseAdj)
  // 也就是递归处理每个顶点。对于顶点vertex来说，
  // 我们先输出它可达的所有顶点，也就是说，
  // 先把它依赖的所有的顶点输出了，然后再输出自己。
  for (let i = 0; i < _keys.length; i++) {
    if(!visited[_keys[i]]) {
      visited[_keys[i]] = true
      dfs(_keys[i], inverseAdj, visited, path)
    }
  }
  
  return path.join('->')
}

function dfs(vertex,inverseAdj, visited, path) {
  const len = inverseAdj[vertex] ? inverseAdj[vertex].length : 0;
  for (let i = 0; i < len; i++) {
    const w = inverseAdj[vertex][i]
    if (visited[w]) {
      continue;
    }
    visited[w] = true;
    dfs(w, inverseAdj, visited, path)
  }
  path.push(vertex)
}

const graph = new Graph()
graph.insert('i', 'a')
graph.insert('b', 'a')
graph.insert('a', 'c')
graph.insert('c', 'e')

console.log(topoSortByDFS(graph));