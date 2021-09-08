/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-08-28 18:13:06
 * @LastEditTime: 2021-08-28 18:31:45
 * @LastEditors: mTm
 */

/* 状态转移表法
硬币值数组
@param coinVal
给定金额
@param money
@return 给定金额下最小的硬币数量 */
function lookCoins(coinVal, money) {
  // coinNum存放的是每个对应金额下最少硬币的最优解
  const coinNum = [];
  for (let i = 0; i < coinVal.length; ++i) {
    coinNum[coinVal[i]] = 1;
  }
  for (let i = 1; i <= money; ++i) {
    if (!coinNum[i]) {
      let min = Number.MAX_SAFE_INTEGER;
      for (let j = 0; j < coinVal.length; ++j) {
        if (i - coinVal[j] > 0 && coinNum[i - coinVal[j]]) {
          const v1 = 1 + coinNum[i - coinVal[j]];
          if (v1 < min) {
            min = v1;
          }
        }
      }
      coinNum[i] = min
    }
  }
  return coinNum[money];
}
const coin = lookCoins([1,3,5], 8);
console.log(coin);
