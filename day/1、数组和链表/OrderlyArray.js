/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-05 10:35:57
 * @LastEditTime: 2022-01-05 15:18:41
 * @LastEditors: mTm
 */
/* 从大到小排序 插入排序 */
class OrderlyArray {
  constructor(count) {
    this.maxLeng = count;
    this.length = 0;
    this.arr = new Array(count);
  }

  // type front\back
  insert(start, end, val, type = 'front') {
    if (type === 'front') {
      // console.log('向前插入');
      let i = end - 1;
      while (i >= start && this.arr[i] > val) {
        this.arr[i + 1] = this.arr[i];
        i--;
      }
      this.arr[i + 1] = val;
    } else if (type === 'back') {
      // console.log('向后插入');
      let i = start + 1;
      while (i < end && this.arr[i] < val) {
        this.arr[i - 1] = this.arr[i];
        i++;
      }
      this.arr[i - 1] = val;
    }
  }

  set(index, val) {
    if (index >= this.maxLeng) {
      return false;
    }
    // 向前插入
    if (index >= 0 && this.arr[index - 1] > val) {
      this.insert(0, index, val)
      if (index === this.length) {
        this.length++;
      }
      // 向后插入
    } else if (index < this.length && this.arr[index + 1] < val) {
      insert(index, this.length, val, 'back')
    } else if (index >= this.length) {
      this.push(val);
    } else {
      this.arr[index] = val;
    }
  }

  push(val) {
    if (this.length >= this.maxLeng) {
      return false;
    }
    this.insert(0, this.length, val)
    this.length++;
  }

  remove(index) {
    if (index >= this.maxLeng || index >= this.length) {
      return null;
    }
    for (let i = index + 1; i < this.length; i++) {
      this.arr[i - 1] = this.arr[i];
    }
    this.arr[--this.length] = undefined;
    return this.arr[this.length - 1];
  }

  get(index) {
    if (index >= this.length) {
      return null;
    }
    return this.arr[index];
  }
}

module.exports = OrderlyArray;
