/*
 * @Description: 
 * @Author: mTm
 * @Date: 2020-12-05 17:58:43
 * @LastEditTime: 2020-12-05 21:42:14
 * @LastEditors: mTm
 */
const a = 123;
const b = "ABC"
function getData() { 
    return a + b;
}
// export default 默认导出
// 每个模块都可以有一个default导出。默认导出 default关键字标记；并且一个模块只能够有一个default导出
export default getData;
export {
    a,
    b,
}