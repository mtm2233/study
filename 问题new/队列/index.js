/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-10-05 19:53:32
 * @LastEditTime: 2021-10-05 21:57:49
 * @LastEditors: mTm
 */

class Node {
  data = null;
  next = null;
  constructor(data) {
    this.data = data;
  }
}

// 链式队列
class LinkQueue {
  // head表示队头下标，tail表示队尾下标
  head = new Node(null);
  tail = this.head;
  size = 0;
  count = 0;
  constructor(size) {
    this.size = size;
  }
  // 入队
  enqueue(data) {
    if (this.count >= this.size) {
      return false;
    }
    const newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.count++;
    return true;
  }
  // 出队
  dequeue() {
    if (!this.count) {
      return null;
    }
    const temp = this.head.next;
    this.head.next = this.head.next.next;
    this.count--;
    return temp
  }
  clear() {
    this.head = new Node(null);
    this.tail = head;
    this.count = 0;
  }
  get length() {
    return this.count;
  }
  // 下一个出队的元素
  get deItem() {
    if (!this.count) {
      return 'Empty'
    }
    return this.head.next
  }
}

// const linkQueue = new LinkQueue(3);
// linkQueue.enqueue(1)
// linkQueue.enqueue(2)
// linkQueue.enqueue(3)
// console.log(linkQueue.dequeue());
// console.log(linkQueue);

// 顺序队列
class Queue {
  queue = []
  // head表示队头下标，tail表示队尾下标
  head = 0;
  tail = 0;
  size = 0;
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
  }
  // 入队
  enqueue(data) {
    if (this.length >= this.size) {
      return false;
    }
    // 搬移
    if (this.tail === this.size) {
      for (let i = 0; i < this.length; i++) {
        this.queue[i] = this.queue[i + this.head];
      }
      this.tail = this.length;
      this.head = 0;
    }
    this.queue[this.tail++] = data;
    return true;
  }
  // 出队
  dequeue() {
    if (!this.length) {
      return null;
    }
    return this.queue[this.head++]
  }
  clear() {
    this.queue = new Array(size);
    this.tail = 0;
    this.head = 0;
  }
  get length() {
    return this.tail - this.head;
  }
  // 下一个出队的元素
  get deItem() {
    if (!this.length) {
      return 'Empty'
    }
    return this.queue[this.head]
  }
}

// const queue = new Queue(3);
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)

// console.log(queue.dequeue());
// queue.enqueue(4)
// queue.enqueue(5)
// console.log(queue);

// 循环队列
// ** 那么，循环队列为什么用空一个元素的位置呢？？？
// 这个是根据需要来用的
// 循环队列中，由于入队时尾指针向前追赶头指针；出队时头指针向前追赶尾指针，造成队空和队满时头尾指针均相等。
// 因此，无法通过条件head==tail来判别队列是"空"还是"满"。

// 解决这个问题的方法至少有三种：
// ①另设一布尔变量以区别队列的空和满；
// ②少用一个元素的空间。约定入队前，测试尾指针在循环意义下加1后是否等于头指针，若相等则认为队满（注意：tail所指的单元始终为空）；
// ③使用一个计数器记录队列中元素的总数（即队列长度）。
class LoopQueue {
  queue = []
  // head表示队头下标，tail表示队尾下标
  head = 0;
  tail = 0;
  size = 0;
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
  }

  // 入队
  enqueue(data) {
    if (this.count >= this.size) {
      return false;
    }
    this.queue[this.tail] = data;
    this.tail = (this.tail + 1) % this.size;
    return true;
  }
  // 出队
  dequeue() {
    if (!this.count) {
      return null;
    }
    const temp = this.queue[this.head];
    this.head = (this.head + 1) % this.size;
    return temp
  }
  clear() {
    this.queue = new Array(size);
    this.tail = 0;
    this.head = 0;
  }
  get count() {
    if ((this.tail + 1)%this.size === this.head) {
      return this.size;
    } else if (this.tail >= this.head) {
      return this.tail - this.head;
    } else {
      return this.size - this.head + this.tail
    }
  }
  get length() {
    return this.count === this.size ? this.count - 1 : this.count;
  }
  // 下一个出队的元素
  get deItem() {
    if (!this.count) {
      return 'Empty'
    }
    return this.queue[this.head]
  }
}

const loopQueue = new LoopQueue(3)
loopQueue.enqueue(1)
loopQueue.enqueue(2)
console.log(loopQueue.dequeue());
console.log(loopQueue.dequeue());
loopQueue.enqueue(3)
loopQueue.enqueue(4)
console.log(loopQueue.dequeue());
// console.log(loopQueue.dequeue());
console.log('length:', loopQueue.length);


module.exports = {
  LinkQueue,
  Queue,
  LoopQueue,
};
