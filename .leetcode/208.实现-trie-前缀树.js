/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-07-27 11:32:22
 * @LastEditTime: 2022-07-27 11:53:54
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var Trie = function () {
  this.trie = {
    isEndChar: false,
    arr: []
  };
  this.charMap = new Map()
  this.maxIndex = 0
};

Trie.prototype.getIndex = function (char) {
  const index = this.charMap.get(char)
  if (index !== undefined) {
    return index
  } else {
    this.charMap.set(char, this.maxIndex)
  }

  return this.maxIndex++
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.trie;
  for (let i = 0; i < word.length; i++) {
    const index = this.getIndex(word[i]);
    if (!node.arr[index]) {
      node.arr[index] = {
        isEndChar: false,
        arr: [],
      };
    }
    node = node.arr[index];
  }
  node.isEndChar = true
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.trie;
  for (let i = 0; i < word.length; i++) {
    const index = this.getIndex(word[i]);
    if (!node.arr[index]) {
      return false
    }
    node = node.arr[index]
  }

  return node.isEndChar
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.trie;
  for (let i = 0; i < prefix.length; i++) {
    const index = this.getIndex(prefix[i]);
    if (!node.arr[index]) {
      return false
    }
    node = node.arr[index]
  }

  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
