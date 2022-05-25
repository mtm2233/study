/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-10-31 21:48:12
 * @LastEditTime: 2021-11-05 09:10:41
 * @LastEditors: mTm
 */
class Node {
  data = null;
  key = null;
  left = null;
  right = null;
  constructor(key = null, data = null) {
    this.key = key;
    this.data = data;
  }
}

class BinarySearchTree {
  root = null;
  constructor() {}
  insert(key, data) {
    if (!this.root) {
      this.root = new Node(key, data);
      return;
    } else {
      let p = this.root;
      const newNode = new Node(key, data);
      while (p) {
        if (key < p.key) {
          if (!p.left) {
            p.left = newNode;
            return;
          }
          p = p.left;
        } else {
          if (!p.right) {
            p.right = newNode;
            return;
          }
          p = p.right;
        }
      }
    }
  }

  search(key) {
    let p = this.root;
    const arrNode = [];
    while (p) {
      if (p.key === key) {
        arrNode.push(p.data);
      }

      if (key < p.key) {
        p = p.left;
      } else {
        p = p.right;
      }
    }

    const len = arrNode.length;

    // if (!len) {
    //   return false;
    // } else if (len === 1) {
    //   return arrNode[0];
    // } else {
    //   return arrNode;
    // }
    return !len ? false : len === 1 ? arrNode[0] : arrNode;
  }

  removeAll(key) {
    const arr = []
    let res = this.remove(key)
    while (res && res !== 0) {
      arr.push(res)
      res = this.remove(key)
    }
    return arr
  }

  remove(key) {
    // 要删除节点
    let p = this.root;
    // 要删除节点的父节点
    let pp = null;
    // 查找要删除的节点
    while (p && p.key !== key) {
      pp = p;
      if (key < p.key) {
        p = p.left;
      } else {
        p = p.right;
      }
    }

    if (!p) {
      return false;
    }

    const _p = p;
    // 位置
    let pos = null;
    if (pp) {
      if (p.key < pp.key) {
        pos = 'left';
      } else {
        pos = 'right';
      }
    }

    // p为叶子节点
    if (!p.left && !p.right) {
      // p为父节点
      if (!pos) {
        this.root = null;
      } else {
        pp[pos] = null;
      }
      // p只有一个子树
    } else if ((p.left && !p.right) || (!p.left && p.right)) {
      let child = null
      if (p.left && !p.right) {
        child = p.left;
      } else {
        child = p.right;
      }

      if (!pos) {
        this.root = child
      } else {
        pp[pos] = child
      }
      // p有两个节点
    } else {
      // 查看p右子树的最小值
      p = p.right;
      while (p) {
        if (p.left) {
          p = p.left;
        } else {
          break;
        }
      }
      this.remove(p.key);
      p.left = _p.left;
      p.right = _p.right;
      if (!pos) {
        this.root = p
      } else {
        pp[pos] = p;
      }
    }

    return _p.data;
  }

  sort() {
    return this.inOrder()
  }

  // 前序遍历
  preOrder() {
    const arr = []
    const preOrder_c = (p, arr) => {
      if (!p) {
        return
      }
      arr.push(p.data)
      preOrder_c(p.left, arr)
      preOrder_c(p.right, arr)
    }
    preOrder_c(this.root, arr)
    return arr.join('->')
  }

  // 中序遍历
  inOrder() {
    const arr = []
    const inOrder_c = (p, arr) => {
      if (!p) {
        return
      }
      inOrder_c(p.left, arr)
      arr.push(p.data)
      inOrder_c(p.right, arr)
    }
    inOrder_c(this.root, arr)
    return arr.join('->')
  }

  // 后序遍历
  postOrder() {
    const arr = []
    const postOrder_c = (p, arr) => {
      if (!p) {
        return
      }
      postOrder_c(p.left, arr)
      postOrder_c(p.right, arr)
      arr.push(p.data)
    }
    postOrder_c(this.root, arr)
    return arr.join('->')
  }
}

module.exports = BinarySearchTree;
