/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-06-20 09:39:08
 * @LastEditTime: 2021-06-21 11:13:38
 * @LastEditors: mTm
 */
class Node {
  left = null;
  right = null;
  constructor(key, data = -1) {
    this.key = key;
    this.data = data;
  }
}

class BinarySearchTree {
  head = null;
  insert(key, data) {
    const newNode = new Node(key, data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let p = this.head;
    while (p !== newNode) {
      if (key < p.key) {
        if (!p.left) {
          p.left = newNode;
        }
        p = p.left;
      } else {
        if (!p.right) {
          p.right = newNode;
        }
        p = p.right;
      }
    }
  }

  search(key) {
    let p = this.head;
    while (p) {
      if (key === p.key) {
        return p.data;
      }
      if (key < p.key) {
        p = p.left;
      } else {
        p = p.right;
      }
    }
    return null;
  }

  remove(key) {
    let p = this.head;
    // 父节点
    let parent = this.head;
    // left right
    // position = null说明p为根节点
    let position = null;
    // 查找要删除元素的父节点
    while (p && p.key !== key) {
      parent = p;
      if (key < p.key) {
        p = p.left;
        position = "left";
      } else {
        p = p.right;
        position = "right";
      }
      if (!p) {
        return false;
      }
    }

    // p是叶子节点
    if (!p.left && !p.right) {
      if (position) {
        parent[position] = null;
      } else {
        this.head = null;
      }
      return p;
    }

    // p有一个子节点
    if ((p.left && !p.right) || (!p.left && p.right)) {
      if (position) {
        parent[position] = p.left || p.right;
      } else {
        this.head = p.left || p.right;
      }
      return p;
    }

    // p有两个子节点
    const mixNode = this.searchRightMixNode(p);
    mixNode.left = p.left;
    mixNode.right = p.right;
    if (position) {
      parent[position] = mixNode;
    } else {
      this.head = mixNode;
    }
    return p;
  }

  // 查找右子树的最小key的节点
  // 用于remove删除的节点有两个节点
  searchRightMixNode(node) {
    // 右子树
    let p = node.right;
    if (!p.left) {
      node.right = null;
      return p;
    }
    // 最小key的节点的父节点
    while (p.left.left) {
      p = p.left;
    }
    const mixNode = p.left;
    p.left = null;
    return mixNode;
  }

  // 先序遍历
  preOrderTraversal() {
    const tempList = []
    this.preOrderTraversal_c(this.head, (node) => {
      tempList.push(node.data)
    });
    console.log('先序遍历',tempList);
    return tempList
  }
  preOrderTraversal_c(node, handler) {
    if (!node) {
      return;
    }
    handler(node);
    this.preOrderTraversal_c(node.left, handler);
    this.preOrderTraversal_c(node.right, handler);
  }
  // 中序遍历
  midOrderTraversal() {
    const tempList = []
    this.midOrderTraversal_c(this.head, (node) => {
      tempList.push(node.data)
    });
    console.log('中序遍历', tempList);
    return tempList
  }
  midOrderTraversal_c(node, handler) {
    if (!node) {
      return;
    }
    this.midOrderTraversal_c(node.left, handler);
    handler(node);
    this.midOrderTraversal_c(node.right, handler);
  }
  // 后续遍历
  postOrderTraversal() {
    const tempList = []
    this.postOrderTraversal_c(this.head, (node) => {
      tempList.push(node.data)
    });
    console.log('后续遍历', tempList);
    return tempList
  }
  postOrderTraversal_c(node, handler) {
    if (!node) {
      return;
    }
    this.postOrderTraversal_c(node.left, handler);
    this.postOrderTraversal_c(node.right, handler);
    handler(node);
  }

  max() {
    if (!this.head) {
      return null
    }
    let p = this.head
    while(p.right) {
      p = p.right
    }
    return p.data
  }

  min() {
    if (!this.head) {
      return null
    }
    let p = this.head
    while(p.left) {
      p = p.left
    }
    return p.data
  }
}

const tree = new BinarySearchTree();
tree.insert(10, 10);
tree.insert(6, 6);
tree.insert(15, 15);
tree.insert(11, 11);
tree.insert(5, 5);
tree.insert(9, 9);
tree.insert(8, 8);
tree.remove(10);
// 遍历
tree.preOrderTraversal();
tree.midOrderTraversal();
tree.postOrderTraversal();

console.log('max', tree.max());
console.log('min', tree.min());