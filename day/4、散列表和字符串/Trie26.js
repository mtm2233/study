/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-08 13:57:24
 * @LastEditTime: 2022-01-08 23:05:51
 * @LastEditors: mTm
 */
class Node {
  constructor(key) {
    this.key = key;
    this.children = new Array(26);
    this.isEnding = false;
  }
}

class Trie {
  CODE = 'a'.charCodeAt();
  constructor() {
    this.trie = new Node('/');
  }

  add(str) {
    let q = this.trie;
    for (let i = 0; i < str.length; i++) {
      const code = str[i].charCodeAt() - this.CODE;
      if (!q.children[code]) {
        q.children[code] = new Node(str[i]);
      }
      q = q.children[code];
    }
    q.isEnding = true;
  }

  find(str) {
    let q = this.trie;
    let i = 0;
    while (q && i < str.length) {
      const code = str[i++].charCodeAt() - this.CODE;
      q = q.children[code]
    }
    return q && q.isEnding;
  }

  search_c(q, data, prefix) {
    if (!q) {
      return;
    }
    if (q.isEnding) {
      data.push(prefix + q.key)
    }
    for (let i = 0; i < q.children.length; i++) {
      if (q.children[i]) {
        this.search_c(q.children[i], data, prefix + q.key)
      }
    }
  }

  search(str) {
    let q = this.trie;
    let i = 0;
    while (q && i < str.length) {
      const code = str[i++].charCodeAt() - this.CODE;
      q = q.children[code]
    }
    if (!q) {
      return []
    }
    const data = []
    this.search_c(q, data, str.slice(0, -1))
    return data;
  }

  clear() {
    this.trie = new Node('/');
  }
}

module.exports = Trie;
