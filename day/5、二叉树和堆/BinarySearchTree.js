/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-08 23:21:59
 * @LastEditTime: 2022-01-11 20:06:33
 * @LastEditors: mTm
 */
class Node {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  insert(key, data) {
    const newNode = new Node(key, data);
    this.length++;
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let q = this.root;
    while (q) {
      if (q.key < key) {
        if (!q.right) {
          q.right = newNode;
          return;
        }
        q = q.right;
      } else {
        if (!q.left) {
          q.left = newNode;
          return;
        }
        q = q.left;
      }
    }
  }

  get(key) {
    let q = this.root;
    while (q && q.key !== key) {
      if (q.key < key) {
        q = q.right;
      } else {
        q.left;
      }
    }
    return q ? q.data : null;
  }

  removeAll(key) {
    const removeData = [];
    let res = this.remove(key);
    while (res) {
      removeData.push(res);
      res = this.remove(key);
    }
    return removeData;
  }

  remove(key) {
    // 要删除的节点
    let q = this.root;
    // 要删除的节点的父节点
    let qq = null;
    // 要删除的节点与父节点的关系
    let pos = null;
    while (q && q.key !== key) {
      qq = q;
      if (q.key < key) {
        q = q.right;
      } else {
        q = q.left;
      }
    }

    if (!q) {
      return null;
    }
    if (qq) {
      if (qq.key < q.key) {
        pos = 'right';
      } else {
        pos = 'left';
      }
    }
    // 没有子节点
    if (!q.left && !q.right) {
      if (!pos) {
        this.root = null;
      } else {
        qq[pos] = null;
      }
    } else if (q.left && q.right) {
      // 右子树的最小值 替换被删除的元素
      let p = this.minNode(q.right);
      this.remove(p.key);
      p.left = q.left;
      p.right = q.right;
      if (!pos) {
        this.root = p;
      } else {
        qq[pos] = p;
      }
    } else {
      // 一个子节点
      if (!pos) {
        this.root = q.left || q.right;
      } else {
        qq[pos] = q.left || q.right;
      }
    }
    this.length--;
    return q.data;
  }

  maxNode(root) {
    let q = root;
    while (q && q.right) {
      q = q.right;
    }
    return q;
  }

  minNode(root) {
    let q = root;
    while (q && q.left) {
      q = q.left;
    }
    return q;
  }

  // 前驱结点
  // 当一个结点有左子树的时候，就是最左子树的最右结点；
  // 没有左子树的时候，
  // a. 看当前结点node是不是它父亲(node.parent)的右孩子，如果是，那么它父亲(node.parent)就是它的前驱；
  // b. 如果当前结点是它父亲的左孩子(node.parent.left == node)，那么就向上不停的寻找它的前驱结点，
  // 即当前结点为node，它的父亲为parent，如果node还是parent的左孩子，
  // 就令node = parent，parent = parent.parent，一直向上，
  // 直到parent.right = node，就停止，此时parent就是当初要找的结点的前驱。
  precursorNode(key) {
    // 要查找的节点
    let node = this.root;
    // 要查找节点的父节点
    let parent = null;
    // 查找过程中的最后一个有右子树的节点
    let rightNode = null;
    while (node && node.key !== key) {
      parent = node;
      if (node.key < key) {
        rightNode = node;
        node = node.right;
      } else {
        node = node.left;
      }
    }

    if (!node) {
      return null;
    }
    if (node.left) {
      return this.maxNode(node.left).data;
    } else if (parent.right === node) {
      return parent.data;
    } else {
      return rightNode ? rightNode.data : null;
    }
  }

  // 后继节点
  // 第一，如果node结点有右子树，那么就是右子树上最左的结点
  // 第二，如果node结点没有右子树，那么要分两种情况:
  // a.看当前结点node 是不是它父亲(node.parent)的左孩子，如果是，那么它父亲(node.parent)就是它的后继；
  // b.如果当前结点是它父亲的右孩子(node.parent.right == node)，那么就向上不停的寻找它的后继结点，
  // 即当前结点为node，它的父亲为parent，如果node还是parent的右孩子，
  // 就令node = parent，parent = parent.parent，一直向上，直到parent.left = node，
  // 就停止，此时parent就是当初要找的结点的后继。
  successorNode(key) {
    // 要查找的节点
    let node = this.root;
    // 要查找节点的父节点
    let parent = null;
    // 查找过程中的最后一个有右子树的节点
    let leftNode = null;
    while (node && node.key !== key) {
      parent = node;
      if (node.key < key) {
        node = node.right;
      } else {
        leftNode = node;
        node = node.left;
      }
    }

    if (!node) {
      return null;
    }
    if (node.right) {
      return this.minNode(node.right).data;
    } else if (parent.left === node) {
      return parent.data;
    } else {
      return leftNode ? leftNode.data : null;
    }
  }

  // 前序遍历
  preOrder() {
    const data = [];
    const preOrder_c = root => {
      if (!root) {
        return;
      }
      data.push(root.data);
      preOrder_c(root.left);
      preOrder_c(root.right);
    };
    preOrder_c(this.root);
    return data;
  }

  // 中序遍历
  inOrder() {
    const data = [];
    const inOrder_c = root => {
      if (!root) {
        return;
      }
      inOrder_c(root.left);
      data.push(root.data);
      inOrder_c(root.right);
    };
    inOrder_c(this.root);
    return data;
  }

  // 后序遍历
  postOrder() {
    const data = [];
    const postOrder_c = root => {
      if (!root) {
        return;
      }
      postOrder_c(root.left);
      postOrder_c(root.right);
      data.push(root.data);
    };
    postOrder_c(this.root);
    return data;
  }

  // 按层遍历
  levelOrder() {
    const data = []
    const queue = [this.root]
    while (queue.length) {
      const node = queue.shift()
      data.push(node.data)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    return data
  }
}

module.exports = BinarySearchTree;
