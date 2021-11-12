/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-31 21:48:00
 * @LastEditTime: 2021-11-12 23:29:26
 * @LastEditors: mTm
 */
const { getArr, runTime } = require('../../utils')
const BinarySearchTree = require('./binarySearchTree')
const Heap = require('./Heap')

const arr = getArr(0,10, 5)

// const binarySearchTree = new BinarySearchTree()


// binarySearchTree.insert(5,'5data')
// binarySearchTree.insert(2,'2data')
// binarySearchTree.insert(9,'9data')
// binarySearchTree.insert(9,'9data')
// console.log(binarySearchTree.removeAll(9));
// console.log(binarySearchTree);
// 遍历
// console.log(binarySearchTree.preOrder());
// console.log(binarySearchTree.sort());
// console.log(binarySearchTree.postOrder());


// 堆
const heap = new Heap()
arr.forEach(num => heap.insert(num))

console.log(heap);
console.log(heap.removeTop());
console.log(heap.removeTop());
console.log(heap.removeTop());
console.log(heap.removeTop());
console.log(heap.removeTop());