/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-02-23 17:32:11
 * @LastEditTime: 2022-02-23 17:33:28
 * @LastEditors: mTm
 */
const obj = {
  name: 'obj1',
  say: () => {
    console.log(this.obj1);
  },
  run() {
    console.log('run');
  }
}

obj.say()
obj.run()