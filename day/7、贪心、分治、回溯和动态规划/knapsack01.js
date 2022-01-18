/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-14 14:02:07
 * @LastEditTime: 2022-01-17 21:45:23
 * @LastEditors: mTm
 */
function knapsack01(goods, weight) {
  const value = new Array(weight + 1);
  const selectGoods = new Array(weight + 1);
  value[0] = 0;
  selectGoods[0] = [];
  for (let i = 0; i < goods.length; i++) {
    const item = goods[i];
    for (let w = weight - 1; w >= 0; w--) {
      const newWeight = w + item.weight;
      if (value[w] !== undefined && newWeight <= weight) {
        // 保留相同重量、价值更大的选择
        if (!value[newWeight] || value[newWeight] < value[w] + item.value) {
          value[newWeight] = value[w] + item.value;
          selectGoods[newWeight] = [...selectGoods[w], item];
        }
      }
    }
  }

  // 价值最大的选择
  let index = 0;
  for (let i = 1; i <= weight; i++) {
    if (value[index] < value[i]) {
      index = i;
    }
  }

  return {
    value: value[index],
    selectGoods: selectGoods[index],
  };
}

module.exports = knapsack01;
