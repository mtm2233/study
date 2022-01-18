/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-14 13:59:10
 * @LastEditTime: 2022-01-17 11:37:18
 * @LastEditors: mTm
 */
function recallKnapsack01(goods, weight) {
  let value = 0;
  const len = goods.length;
  let selectGoods = [];
  // 决策第index个物品
  // 当前重量currWeight
  // 当前价值currValue
  // 当前选择的物品select
  function recallKnapsack01_c(index, currWeight, currValue, select) {
    if (currWeight <= weight && currValue > value) {
      value = currValue;
      selectGoods = select;
    }
    if (index >= len || currWeight >= weight) {
      return;
    }

    // 不装
    recallKnapsack01_c(index + 1, currWeight, currValue, select);
    // 装
    const item = goods[index];
    recallKnapsack01_c(
      index + 1,
      currWeight + item.weight,
      currValue + item.value,
      [...select, item]
    );
  }
  recallKnapsack01_c(0, 0, 0, []);
  return {
    selectGoods,
    value,
  };
}

module.exports = recallKnapsack01;
