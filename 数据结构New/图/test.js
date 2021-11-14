/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-14 16:51:55
 * @LastEditTime: 2021-11-14 17:27:05
 * @LastEditors: mTm
 */
const AdjacencyMatrix = require('./AdjacencyMatrix')

const adjacencyMatrix = new AdjacencyMatrix({
  directed: true
})

adjacencyMatrix.add(1, 2)
adjacencyMatrix.add(2, 5)
adjacencyMatrix.add(5, 1)
adjacencyMatrix.remove(5, 1)

console.log(adjacencyMatrix.inDegree(1));
console.log(adjacencyMatrix.outDegree(1));