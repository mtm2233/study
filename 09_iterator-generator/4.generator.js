/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-03-13 22:08:14
 * @LastEditTime: 2022-03-13 22:16:16
 * @LastEditors: mTm
 */
function* foo(str) {
  const a = 'aaa'
  console.log('第一段');
  const a1 = yield a;
  console.log('第二段', a1);
  // return '123'
  // try {
  //   const a1 = yield a;
  //   console.log('第二段', a1);
  // } catch (err) {
  //   console.log('第二段err', err);
  // }
  yield 'bbb';
  console.log('第三段');
  yield 'ccc';
  console.log('第四段');
  return 'ddd'
}

const generator = foo('11111')

console.log(generator.next());
// console.log(generator.return(111));
// console.log(generator.throw(111));
console.log(generator.next(111));
console.log(generator.next());
console.log(generator.next());