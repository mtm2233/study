/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-05 10:39:03
 * @LastEditTime: 2022-01-05 21:16:54
 * @LastEditors: mTm
 */
class Node {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.pre = null;
    this.next = null;
  }
}

// 链表
class LinkList {
  constructor() {
    // 路由守卫
    this.head = new Node();
    this.length = 0;
  }

  get(key, val) {
    let q = this.head;
    while (q && q.key !== key) {
      q = q.next;
    }
    if (q && val) {
      q.data = val;
    }
    return q ? q.data : null;
  }

  add(key, data) {
    let q = this.head;
    while (q && q.next) {
      q = q.next;
    }
    q.next = new Node(key, data);
    this.length++;
  }

  remove(key) {
    let q = this.head;
    while (q && q.next && q.next.key !== key) {
      q = q.next;
    }
    if (q.next) {
      const temp = q.next;
      q.next = q.next.next;
      this.length--;
      return temp;
    }
    return null;
  }

  set(key, data) {
    const res = this.get(key, data);
    if (!res) {
      this.add(key, data);
    }
  }

  toString() {
    let q = this.head.next;
    const arr = [];
    while (q) {
      arr.push({
        key: q.key,
        data: q.data,
      });
      q = q.next;
    }
    return arr.map(({ key, data }) => `${data}`).join('->');
  }
}

// 循环链表
class CircularLinkedList {
  constructor() {
    // 路由守卫
    this.head = new Node();
    this.head.next = this.head;
    this.length = 0;
  }

  get(key, val) {
    let q = this.head.next;
    while (q !== this.head && q.key !== key) {
      q = q.next;
    }
    if (q !== this.head && val) {
      q.data = val;
    }
    return q !== this.head ? q.data : null;
  }

  add(key, data) {
    let q = this.head;
    while (q.next !== this.head) {
      q = q.next;
    }
    const newNode = new Node(key, data);
    newNode.next = this.head;
    q.next = newNode;
    this.length++;
  }

  remove(key) {
    let q = this.head.next;
    while (q !== this.head && q.next.key !== key) {
      q = q.next;
    }
    if (q.next.key === key) {
      const temp = q.next;
      q.next = q.next.next;
      this.length--;
      return temp;
    }
    return null;
  }

  set(key, data) {
    const res = this.get(key, data);
    if (!res) {
      this.add(key, data);
    }
  }

  toString() {
    let q = this.head.next;
    const arr = [];
    while (q !== this.head) {
      arr.push({
        key: q.key,
        data: q.data,
      });
      q = q.next;
    }
    return arr.map(({ key, data }) => `${data}`).join('->');
  }
}

// 双向链表
class DoublyLinkedList {
  constructor() {
    // 路由守卫
    this.head = new Node();
    this.length = 0;
  }

  get(key, val) {
    let q = this.head;
    while (q && q.key !== key) {
      q = q.next;
    }
    if (q && val) {
      q.data = val;
    }
    return q ? q.data : null;
  }

  add(key, data) {
    let q = this.head;
    while (q && q.next) {
      q = q.next;
    }
    const newNode = new Node(key, data);
    newNode.pre = q;
    q.next = newNode;
    this.length++;
  }

  remove(key) {
    let q = this.head;
    while (q && q.next && q.next.key !== key) {
      q = q.next;
    }
    if (q.next) {
      const temp = q.next;
      q.next = q.next.next;
      if (q.next) {
        q.next.pre = temp.pre;
      }
      this.length--;
      return temp;
    }
    return null;
  }

  set(key, data) {
    const res = this.get(key, data);
    if (!res) {
      this.add(key, data);
    }
  }

  toString() {
    let q = this.head.next;
    const arr = [];
    while (q) {
      arr.push({
        key: q.key,
        data: q.data,
      });
      q = q.next;
    }
    return arr.map(({ key, data }) => `${data}`).join('<->');
  }
}

module.exports = {
  LinkList,
  CircularLinkedList,
  DoublyLinkedList,
};
