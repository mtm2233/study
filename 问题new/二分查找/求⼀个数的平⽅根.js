/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-10-16 23:28:24
 * @LastEditTime: 2021-10-17 00:51:53
 * @LastEditors: mTm
 */

const Big = require('big.js');

function sqrtBigjs(num, decimals) {
  let middleValue = new Big(1);
  for (let i = 0; i < decimals; i++) {
    middleValue = middleValue.times(0.1);
  }

  let low = new Big(0),
    high = new Big(num);
  while (low <= high) {
    const mid = new Big(low.plus(high.minus(low).div(2)).toFixed(decimals));
    // 相等
    const equal = mid.times(mid).gte(num) && mid.times(mid).lte(num);
    const nextVal = mid.plus(middleValue);
    const preVal = mid.minus(middleValue);

    if (
      equal ||
      (nextVal.times(nextVal).gt(num) &&
      preVal.times(preVal).lt(num))
    ) {
      return mid.toNumber()
    }

    if (mid.times(mid).lt(num)) {
      low = nextVal
    } else {
      high = preVal
    }
  }
}

console.log(sqrtBigjs(5, 1));

function sqrt(num, decimals) {
  let middleValue = 1;
  for (let i = 0; i < decimals; i++) {
    middleValue *= 0.1;
  }

  let low = 0,
    high = num;
  while (low <= high) {
    const mid = Number((low + (high - low)/2).toFixed(decimals));
    const nextVal = mid + middleValue;
    const preVal = mid - middleValue;
    if (
      mid * mid === num ||
      ((nextVal) * (nextVal) > num &&
        (preVal) * (preVal) < num)
    ) {
      return mid
    }

    if (mid * mid > num) {
      high = preVal
    } else {
      low = nextVal
    }
  }
}

console.log(sqrt(5, 1));