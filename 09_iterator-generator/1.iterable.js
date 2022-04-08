/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-03-13 21:04:56
 * @LastEditTime: 2022-03-13 21:11:12
 * @LastEditors: mTm
 */
/* 可迭代对象 */

const obj = {
  names: ['ma', 'is', 'mtm'],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        // if (index < 2) // 提前结束
        if (index < this.names.length) {
          return {
            done: false,
            value: this.names[index++],
          };
        } else {
          return {
            done: true,
            value: undefined,
          };
        }
      },
    };
  },
};

for (const name of obj) {
  console.log(name);
}