/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-14 16:51:55
 * @LastEditTime: 2021-11-14 22:20:33
 * @LastEditors: mTm
 */
// const AdjacencyMatrix = require('./AdjacencyMatrix')

// const adjacencyMatrix = new AdjacencyMatrix({
//   directed: true
// })

// adjacencyMatrix.add(1, 2)
// adjacencyMatrix.add(2, 5)
// adjacencyMatrix.add(5, 1)
// adjacencyMatrix.remove(5, 1)

// console.log(adjacencyMatrix.inDegree(1));
// console.log(adjacencyMatrix.outDegree(1));

const AdjacencyList = require('./AdjacencyList')
const adjacencyList = new AdjacencyList({
  directed: true
})
adjacencyList.add(1, 2)
adjacencyList.add(2, 5)
adjacencyList.add(5, 1)
console.log(adjacencyList.inDegree(1));
console.log(adjacencyList.outDegree(1));