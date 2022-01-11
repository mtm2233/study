/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-08 23:12:46
 * @LastEditTime: 2022-01-11 20:06:43
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
const { Heap, PriorityQueue } = require('./Heap');

const maxHeap = new Heap({
  type: 'max',
});
const minHeap = new Heap({
  type: 'min',
});

// 实现堆排序
const heapSort = require('./heapSort');

// 利⽤优先级队列合并K个有序数组
const mergeArrByHeap = require('./mergeArrByHeap');

// 求⼀组动态数据集合的最⼤Top K
const topK = require('./topK');
