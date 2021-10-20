/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-05 18:36:19
 * @LastEditTime: 2021-10-05 20:10:50
 * @LastEditors: mTm
 */

class Node {
  data = null;
  next = null;
  constructor(data) {
    this.data = data
  }
}

// 顺序栈
class LinkStack {
  q = new Node(null)
  count = 0

  // 入栈
  push(data) {
    const newNode = new Node(data)
    newNode.next = this.q.next
    this.q.next = newNode
    this.count++
  }

  // 出栈
  pop() {
    if (!this.count) {
      return null
    }
    this.count--;
    const temp = this.q.next
    this.q.next = this.q.next.next
    return temp
  }
}

// 顺序栈
// class Stack {
//   count = 0
//   value = new Proxy([], {
//     set: (obj, key, val) => {
//       if ((!isNaN(key) && Number(key) === this.count) || key === 'length') {
//         return Reflect.set(obj, key, val);
//       } else {
//         throw new Error('请使用push、pop进行栈操作');
//       }
//     }
//   })

//   push(data) {
//     this.value.push(data);
//     this.count++;
//   }

//   pop() {
//     this.count--;
//     return this.value.pop()
//   }

//   get length() {
//     return this.count;
//   }
// }

// const stack = new Stack()

// stack.push(123)
// console.log(stack);


// 顺序栈
class Stack {
  value = []
  count = 0;

  constructor(size = 10) {
    this.size = 10;
    this.value = new Array(size);
  }

  // 入栈
  push(data) {
    if (this.count >= this.size) {
      return false;
    }
    this.value[this.count++] = data;
  }

  // 出栈
  pop() {
    if (this.count > 1) {
      return this.value[--this.count]
    } 
    return false
  }

  // 清空栈
  clear() {
    this.value = new Array(size);
    this.count = 0;
  }

  // 查看当前的栈顶元素
  get peek() {
    if (this.count > 1) { 
      return this.value[this.count - 1]
    }
    return 'Empty'
  }

  get length() {
    return this.count;
  }
}

module.exports = {
  LinkStack,
  Stack
}