/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-09-06 21:53:11
 * @LastEditTime: 2021-09-07 09:34:56
 * @LastEditors: mTm
 */

// 定义数据结构的时候，如果s需要先于t执行，那就添加一条s指向t的边。
// 所以，如果某个顶点入度为0， 也就表示，
// 没有任何顶点必须先于这个顶点执行，那么这个顶点就可以执行了。
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

function kahn(graph) {
  const inDegree = {}; // 统计每个顶点的入度
  const keys = Object.keys(graph.data);
  for(let i = 0; i < keys.length; i++) {
    const _data = graph.data[keys[i]]
    if (inDegree[keys[i]] === undefined) {
      inDegree[keys[i]] = 0
    }
    for (let j = 0; j < _data.length; j++) {
      const _key = _data[j]
      if (inDegree[_key]) {
        inDegree[_key]++
      } else {
        inDegree[_key] = 1
      }
    }
  }

  const queue = [];
  const inDegreeKeys = Object.keys(inDegree)
  for(let i = 0; i < inDegreeKeys.length; i++) {
    const key = inDegreeKeys[i]
    if (!inDegree[key]) {
      queue.push(key)
    }
  }

  let path = []
  while (queue.length) {
    const key = queue.shift();
    path.push(key);
    const _data = graph.data[key] || [];
    for(let i = 0; i < _data.length; i++) {
      inDegree[_data[i]]--;
      if (inDegree[_data[i]] === 0) {
        queue.push(_data[i])
      }
    }
  }

  return path.join('->')
}


const graph = new Graph()
// a依赖c
graph.insert('c', 'a')
graph.insert('a', 'i')
graph.insert('a', 'b')
graph.insert('c', 'e')

console.log(kahn(graph));