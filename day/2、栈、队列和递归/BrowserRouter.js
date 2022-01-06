/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-06 09:10:35
 * @LastEditTime: 2022-01-06 15:29:19
 * @LastEditors: mTm
 */
const StackList = require('./StackList');

class BrowserRouter {
  constructor() {
    this.stack1 = new StackList(100);
    this.stack2 = new StackList(100);
  }

  go(url) {
    if (url) {
      this.stack2.clear();
      this.stack1.push(url);
    } else if (this.stack2.length) {
      const tempUrl = this.stack2.pop();
      this.stack1.push(tempUrl);
    }
    return this.stack1.getPop();
  }

  back() {
    if (this.stack1.length > 1) {
      const tempUrl = this.stack1.pop();
      this.stack2.push(tempUrl);
    }
    return this.stack1.getPop();
  }

  get page() {
    return this.stack1.getPop() || null;
  }
}

module.exports = BrowserRouter;
