/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-05 10:35:51
 * @LastEditTime: 2022-01-05 13:14:46
 * @LastEditors: mTm
 */
class ExpandingArray {
  constructor() {
    this.maxLen = 10;
    this.length = 0;
    this.arr = new Array(this.maxLen);
  }

  // 扩容
  dilatation(num) {
    this.maxLen = num || 2 * this.maxLen;
    const tempArr = this.arr;
    this.arr = new Array(this.maxLen);
    for (let i = 0; i < tempArr.length; i++) {
      this.arr[i] = tempArr[i];
    }
  }

  push(val) {
    if (this.length === this.maxLen) {
      this.dilatation();
    }
    this.arr[this.length++] = val;
  }

  set(index, val) {
    if (index >= this.maxLen) {
      this.dilatation(index + 1);
    }
    this.arr[index] = val;
    this.length++;
  }

  get(index) {
    return this.arr[index];
  }
}

module.exports = ExpandingArray;
