/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-31 21:48:00
 * @LastEditTime: 2021-10-31 23:09:37
 * @LastEditors: mTm
 */
const { getArr, runTime } = require('../../utils')
const BinarySearchTree = require('./binarySearchTree')

const binarySearchTree = new BinarySearchTree()

const arr = getArr(0,100,10)

binarySearchTree.insert(5,'5data')
binarySearchTree.insert(2,'2data')
binarySearchTree.insert(9,'9data')
binarySearchTree.insert(9,'9data')
console.log(binarySearchTree.removeAll(9));
console.log(binarySearchTree);
// 遍历
// console.log(binarySearchTree.sort());
// console.log(binarySearchTree.inOrder());
// console.log(binarySearchTree.postOrder());