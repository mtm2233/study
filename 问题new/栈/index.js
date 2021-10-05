/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-05 18:36:19
 * @LastEditTime: 2021-10-05 19:26:19
 * @LastEditors: mTm
 */

class Node {
  data = null;
  next = null;
  constructor(data) {
    this.data = data
  }
}

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
  shift() {
    if (!this.count) {
      return null
    }
    this.count--;
    const temp = this.q.next
    this.q.next = this.q.next.next
    return temp
  }
}

class Stack {
  count = 0
  value = new Proxy([], {
    set: (obj, key, val) => {
      if ((!isNaN(key) && Number(key) === this.count) || key === 'length') {
        return Reflect.set(obj, key, val);
      } else {
        throw new Error('请使用push、shift进行栈操作');
      }
    }
  })

  push(data) {
    this.value.push(data);
    this.count++;
  }

  shift() {
    this.count--;
    return this.value.shift()
  }

  get length() {
    return this.count;
  }
}

const stack = new Stack()

stack.push(123)
console.log(stack);