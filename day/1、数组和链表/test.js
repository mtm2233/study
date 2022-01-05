/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-05 10:32:36
 * @LastEditTime: 2022-01-05 22:00:44
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
  LinkList,
  CircularLinkedList,
  DoublyLinkedList,
} = require('./LinkedList');
// 链表
// const linkList = new LinkList()

// linkList.add(1,1)
// linkList.add(2,2)
// linkList.add(3,3)
// console.log(linkList.remove(1));
// linkList.set(2,2)
// console.log(linkList.head);
// console.log(linkList.toString());

// 循环链表
// const circularLinkedList = new CircularLinkedList();

// circularLinkedList.add(1, 1);
// circularLinkedList.add(2, 2);
// // circularLinkedList.add(3,3)
// // circularLinkedList.set(2, 5);
// // circularLinkedList.remove(2);
// // console.log(circularLinkedList.head);
// console.log(circularLinkedList.get(2));
// console.log(circularLinkedList.toString());

// 双向链表
// const doublyLinkedList = new DoublyLinkedList();
// doublyLinkedList.add(1, 1);
// doublyLinkedList.add(2, 2);
// doublyLinkedList.add(3, 3);
// // doublyLinkedList.set(2, 5);
// doublyLinkedList.remove(2);
// // console.log(doublyLinkedList.head);
// console.log(doublyLinkedList.toString());

const linked1 = new LinkList()
linked1.add(1,1)
linked1.add(2,2)
linked1.add(3,3)
linked1.add(4,4)
linked1.add(5,5)
const linked2 = new LinkList()
linked2.add(0,0)
linked2.add(3,3)
linked2.add(6,6)

const linked3 = new LinkList()

// 实现单链表反转
// const reverseLinkedList = require('./reverseLinkedList');
// console.log(reverseLinkedList(linked1).toString());

// 实现两个有序的链表合并为⼀个有序链表
// const mergeLinkedList = require('./mergeLinkedList');
// console.log(mergeLinkedList(linked1, linked2, linked3).toString());

// 实现求链表的中间结点
const linkedCenterNode = require('./linkedCenterNode');
console.log(linkedCenterNode(linked1));
