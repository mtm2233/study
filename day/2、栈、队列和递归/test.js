/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-05 22:02:31
 * @LastEditTime: 2022-01-06 20:55:32
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
// const QueueList = require('./QueueList')
// const queue = new QueueList(10)
// queue.push(1)
// queue.push(2)
// queue.push(3)
// console.log(queue.unshift());
// console.log(queue);

// ⽤链表实现⼀个链式队列
// const QueueLinked = require('./QueueLinked');
// const queueLinked = new QueueLinked(10);
// queueLinked.push(1);
// queueLinked.push(2);
// queueLinked.push(3);
// console.log(queueLinked.toString());
// console.log(queueLinked.unshift());
// console.log(queueLinked.toString());

// 实现⼀个循环队列
// const QueueCircular = require('./QueueCircular');
// const queueCircular = new QueueCircular(3)
// queueCircular.push(1)
// queueCircular.push(2)
// queueCircular.push(3)
// console.log(queueCircular.unshift());
// queueCircular.push(3)
// console.log(queueCircular.data);

/* 递归 */
// 编程实现斐波那契数列求值f(n)=f(n-1)+f(n-2)
// const fibonacci = require('./fibonacci');
// console.log(fibonacci(100));

// 编程实现求阶乘n!
// const factorial = require('./factorial');
// console.log(factorial(4));

// 编程实现⼀组数据集合的全排列
// const allPermutation = require('./allPermutation');
// console.log(new Set(allPermutation([1, 2, 3, 4, 5])));
