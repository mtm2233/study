/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  // 最大价格
  const maxPrices = new Array(len).fill(0);
  // 最大利润
  const profits = new Array(len).fill(0);

  // 初始化
  maxPrices[len - 1] = prices[len - 1];

  for (let i = len - 2; i >= 0; i--) {
    maxPrices[i] = prices[i] > maxPrices[i + 1] ? prices[i] : maxPrices[i + 1];
    profits[i] = maxPrices[i + 1] - prices[i];
  }

  let maxProfit = 0;
  for (const profit of profits) {
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};
// @lc code=end
