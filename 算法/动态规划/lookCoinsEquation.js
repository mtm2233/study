/*
 * @Description: 如果我们要支付w元，求最少需要多少个硬币
 * @Author: mTm
 * @Date: 2021-08-28 17:34:45
 * @LastEditTime: 2021-08-28 18:13:53
 * @LastEditors: mTm
 */
// 1元、3元、5元，我们要支付9元，最少需要3个硬币
// 可以看做爬阶梯问题，分别可以走1.3.5步，怎么最少走到9步，
// 动态转移方程为f(9)=1+min(f(8),f(6),f(4))

// 状态转移方程法
const monetMap = {
  1: 1,
  3: 1,
  5: 1,
};
function lookCoins(money) {
  if (monetMap[money]) {
    return monetMap[money];
  }
  if (money <= 0) {
    return 0;
  }
  const coin =
    1 +
    Math.min(lookCoins(money - 1), lookCoins(money - 3), lookCoins(money - 5));
  monetMap[money] = coin;
  return coin;
}
const coin = lookCoins(23);
console.log(coin);
