/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-04 11:11:07
 * @LastEditTime: 2021-03-04 11:12:46
 * @LastEditors: mTm
 */

console.log(1);
console.log(2);

// 清空控制台
console.clear();

console.log(333);

function a() {
    b()
}

function b() {
    // 输出调用栈
    console.trace();
}

a();