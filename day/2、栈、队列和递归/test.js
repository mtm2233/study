/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-01-05 22:02:31
 * @LastEditTime: 2022-01-06 15:29:50
 * @LastEditors: mTm
 */
/* 栈 */
// ⽤数组实现⼀个顺序栈
// const StackList = require('./StackList')
// const stackList = new StackList(10)
// stackList.push(1)
// stackList.push(2)
// stackList.push(3)
// // console.log(stackList.isFull());
// console.log(stackList.pop());
// console.log(stackList);

// ⽤链表实现⼀个链式栈
// const StackLinked = require('./StackLinked')
// const stackLinked = new StackLinked(10)
// stackLinked.push(1)
// stackLinked.push(2)
// // stackLinked.push(3)
// console.log(stackLinked.pop());
// console.log(stackLinked);

// 编程模拟实现⼀个浏览器的前进、后退功能
// const BrowserRouter = require('./BrowserRouter')
// const browserRouter = new BrowserRouter()
// browserRouter.go('a.html')
// browserRouter.go('b.html')
// browserRouter.go('c.html')
// browserRouter.back()
// browserRouter.go('d.html')
// browserRouter.go()
// console.log(browserRouter.page);

/* 队列 */
// ⽤数组实现⼀个顺序队列
const QueueList = require('./QueueList')

// ⽤链表实现⼀个链式队列
const QueueLinked = require('./QueueLinked')

// 实现⼀个循环队列
const QueueCircular = require('./QueueCircular')


/* 递归 */
// 编程实现斐波那契数列求值f(n)=f(n-1)+f(n-2)
const fibonacci = require('./fibonacci')

// 编程实现求阶乘n!
const factorial = require('./factorial')

// 编程实现⼀组数据集合的全排列
const allPermutation = require('./allPermutation')