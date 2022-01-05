/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-05 10:32:36
 * @LastEditTime: 2022-01-05 15:34:32
 * @LastEditors: mTm
 */

/* 数组 */
// 实现⼀个⽀持动态扩容的数组
// const ExpandingArray = require('./ExpandingArray');
// const expandingArray = new ExpandingArray();
// for (let i = 0; i < 10; i++) {
//   expandingArray.push(i);
// }
// expandingArray.set(20, -1);
// console.log(expandingArray.get(20));
// console.log(expandingArray);

// 实现⼀个⼤⼩固定的有序数组，⽀持动态增删改操作
// const OrderlyArray = require('./OrderlyArray');
// const orderlyArray = new OrderlyArray(10);
// new Array(6,0,5).forEach(num => orderlyArray.push(num))
// // orderlyArray.remove(1)
// // console.log(orderlyArray.get(1));
// orderlyArray.set(3, -1)
// orderlyArray.set(3, 15)
// console.log(orderlyArray);

// 实现两个有序数组合并为⼀个有序数组
// const mergeArray = require('./mergeArray');
// console.log(mergeArray([1,5,6], [4,8,9]));

/* 链表 */
// 实现单链表、循环链表、双向链表，⽀持增删操作
const {
  linkList,
  CircularLinkedList,
  DoublyLinkedList,
} = require('./LinkedList');

// 实现单链表反转
const reverseLinkedList = require('./reverseLinkedList');

// 实现两个有序的链表合并为⼀个有序链表
const mergeLinkedList = require('./mergeLinkedList');

// 实现求链表的中间结点
const linkedCenterNode = require('./linkedCenterNode');
