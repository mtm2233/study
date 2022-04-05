/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-04 20:16:41
 * @LastEditTime: 2022-04-05 16:58:53
 * @LastEditors: mTm
 */
function createPeerson(name, age) {
  const obj = {}
  obj.name = name;
  obj.age = age;
  obj.running = function () {
    console.log('running');
  }
}

const p1 = createPeerson('m', 18)
const p2 = createPeerson('mt', 19)