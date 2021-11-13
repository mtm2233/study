/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-31 21:48:00
 * @LastEditTime: 2021-11-13 20:34:13
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
// const heap = new Heap({
//   heapTypeHandler: (item1, item2) => {
//     return  item1.id > item2.id
//   }
// })
// // arr.forEach(num => heap.insert(num))
// heap.insert({
//   name: 456,
//   id: 1
// })
// heap.insert({
//   name: 444,
//   id: 5
// })
// heap.insert({
//   name: 555,
//   id: 0
// })
// console.log(heap);
// console.log(heap.removeTop());
// console.log(heap.removeTop());
// console.log(heap.removeTop());
// console.log(heap.removeTop());
// console.log(heap.removeTop());

const heap = new Heap({
  data: arr,
  type: 'min'
})

console.log(heap.sort());
console.log(heap);