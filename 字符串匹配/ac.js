/*
 * @Description: AC自动机
 * @Author: mTm
 * @Date: 2021-07-22 23:39:53
 * @LastEditTime: 2021-07-23 01:06:54
 * @LastEditors: mTm
 */
class TrieNode {
  data = null;
  children = [];
  isEndingChar = false;
  // 失败指针
  fail = null;
  // 模式串长度
  length = 0;
  constructor(data) {
    this.data = data;
  }
}

class AC {
  root = new TrieNode("/");
  // 将字符，数字，汉字转为下标
  charMap = new Map();
  // index
  charMapCount = -1;

  charIndex(char, add = true) {
    const index = this.charMap.get(char);
    if (index !== undefined) {
      return index;
    }
    if (add) {
      this.charMap.set(char, ++this.charMapCount);
      return this.charMapCount;
    }
    return -1;
  }
  // 在Trie树中插入一个字符串
  insert(str) {
    let p = this.root;
    const len = str.length;
    let patternLen = 0;
    for (let i = 0; i < len; ++i) {
      const index = this.charIndex(str[i]);
      if (!p.children[index]) {
        p.children[index] = new TrieNode(str[i]);
      }
      p = p.children[index];
      ++patternLen;
    }
    p.isEndingChar = true;
    p.length = patternLen;
  }

  // 构建错误指针
  buildFailurePointer() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      const p = queue.pop();
      for (let i = 0; i <= this.charMapCount; ++i) {
        const pc = p.children[i];
        if (!pc) {
          continue;
        }
        if (p === this.root) {
          pc.fail = this.root;
        } else {
          let q = p.fail;
          while (q) {
            const qc = q.children[this.charIndex(pc.data)];
            if (qc) {
              pc.fail = qc;
              break;
            }
            q = q.fail;
          }
          if (!q) {
            pc.fail = this.root;
          }
        }
        queue.push(pc);
      }
    }
  }

  // text是主串
  match(text) {
    const n = text.length;
    let p = this.root;
    for (let i = 0; i < n; ++i) {
      const index = this.charIndex(text[i], false);

      // 如果要匹配的元素不存在，从root开始重新匹配
      if (index === -1) {
        p = this.root;
        continue;
      }

      while (!p.children[index] && p !== this.root) {
        // 失败指针发挥作用的地方
        p = p.fail;
      }

      p = p.children[index];

      // 如果没有匹配的，从root开始重新匹配
      if (!p) {
        p = this.root;
        continue;
      }
      const len = p.length;

      if (len) {
        text = text.split("");
        text.splice(i - len + 1, len, ...new Array(len).fill("*"));
        text = text.join("");
      }
    }
    return text;
  }
}

const ac = new AC();
ac.insert("abcd");
ac.insert("bcd");
ac.insert("c");
ac.buildFailurePointer();
console.log(ac.match("abcde123456bcd--c--d"));
