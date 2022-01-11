/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-08 23:12:46
 * @LastEditTime: 2022-01-11 21:51:36
 * @LastEditors: mTm
 */
/* ⼆叉树 */
// 实现⼀个⼆叉查找树，并且⽀持插⼊、删除、查找操作
const BinarySearchTree = require('./BinarySearchTree');
const binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(5, 5);
// binarySearchTree.insert(3, 3);
// binarySearchTree.insert(3, 3);
// binarySearchTree.insert(6, 6);
// binarySearchTree.insert(3, 3);
// binarySearchTree.insert(7,7)
// binarySearchTree.insert(4, 4)

// binarySearchTree.remove(4)
// binarySearchTree.remove(3)
// binarySearchTree.remove(5)
// console.log(binarySearchTree.root);
// console.log(binarySearchTree.removeAll(3));

// 实现查找⼆叉查找树中某个节点的后继、前驱节点
// [5, 3, 8, 2, 4, 7, 9].forEach(num => binarySearchTree.insert(num, num));
// console.log(binarySearchTree.precursorNode(7));
// console.log(binarySearchTree.successorNode(4));

// 实现⼆叉树前、中、后序以及按层遍历
// [5, 3, 8, 2, 4, 7, 9].forEach(num => binarySearchTree.insert(num, num));
// console.log(binarySearchTree.preOrder());
// console.log(binarySearchTree.inOrder());
// console.log(binarySearchTree.postOrder());
// console.log(binarySearchTree.levelOrder());

/* 堆 */
// 实现⼀个⼩顶堆、⼤顶堆、优先级队列
const Heap = require('./Heap');

// const heap = new Heap({
//   type: 'min',
//   // type: 'max',
// });

// [1, 5, 0, 6, 9, 10].forEach(num => maxHeap.insert(num));

// console.log(maxHeap.remove());
// console.log(maxHeap.remove());
// console.log(maxHeap.remove());
// console.log(maxHeap.remove());
// console.log(maxHeap.remove());
// console.log(maxHeap.remove());
// console.log(maxHeap);

// 优先级队列
// const queueHeap = new Heap({
//     type: 'min',
//     isWrapHandler: (node1, node2) => {
//       node1.key < node2.key
//     }
//     // type: 'max',
// });

// queueHeap.insert({
//   key: 1,
//   data: 123
// })
// queueHeap.insert({
//   key: 2,
//   data: 456
// })
// console.log(queueHeap.top);
// 实现堆排序
// const heapSort = new Heap({
//     type: 'min',
// });
// [1, 5, 0, 6, 9, 10, -1, 11, 8].forEach(num => heapSort.insert(num));
// console.log(heapSort.sort());

// 利⽤优先级队列合并K个有序数组
// const mergeArrByHeap = require('./mergeArrByHeap');
// const data = [
//   [0, 1, 5, 6, 9],
//   [-1, 5, 7, 8, 891],
//   [4, 8, 9, 15, 562],
// ];
// console.log(mergeArrByHeap(data));

// 求⼀组动态数据集合的最⼤Top K
const TopK = require('./TopK');
const topk = new TopK(3);
[1, 0, -1, 18, 25, 99, -50].forEach(num => topk.add(num));
console.log(topk.data);
