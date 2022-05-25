/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-11-17 23:32:03
 * @LastEditTime: 2021-11-18 00:21:25
 * @LastEditors: mTm
 */
const HashMap = require('../../数据结构复习/散列表/HashMap');

function rk(main, pattern) {
  const pLen = pattern.length;
  const len = main.length - pLen;
  const map = new HashMap({
    nums: pLen,
  });
  // 阶乘、方便hash计算
  const factorials = new Array(pLen);
  factorials[pLen - 1] = 1;
  // map init
  for (let i = 0; i < pLen; i++) {
    map.set(pattern[i], i + 1);
  }
  // factorials init
  // pLen = 3 
  // factorials = [9,3,1]
  for (let i = pLen - 2; i >= 0; i--) {
    factorials[i] = factorials[i + 1] * pLen;
  }

  // hashCode init
  let pCodes = 0;
  let mCodes = 0;
  for (let i = 0; i < pLen; i++) {
    const factorial = factorials[i];
    pCodes += map.get(pattern[i]) * factorial;
    mCodes += (map.get(main[i]) || 0) * factorial;
  }
  if (pCodes === mCodes) {
    return 0;
  }

  // 开始比较
  for (let i = 0; i <= len; i++) {
    const fCode = (map.get(main[i]) || 0) * factorials[0];
    const lCode = map.get(main[i + pLen]) || 0;
    mCodes = (mCodes - fCode) * pLen + lCode;
    if (pCodes === mCodes) {
      let count = 0
      // 进一步确认
      for (let j = 0; j < pLen; j++) {
        if (main[i + 1 + j] !== pattern[j]) {
          break
        }
        count++
      }
      if (count === pLen) {
        return i + 1;
      }
    }
  }

  return -1;
}

module.exports = rk;
