/*
 * @Description: 
 * @Author: mTm
 * @Date: 2020-12-05 17:41:45
 * @LastEditTime: 2020-12-05 21:41:24
 * @LastEditors: mTm
 */
// 模块
/*
    “内容模块”称做“命名空间”。
    “外部模块”则简称为“模块” 模块在其自身的作用域里执行，而不是在全局作用域里；
    这意味着定义在一个模块里的变量，函数，类等等在模块外部都是不可见的，除非你明确地使用export形式之一导出它们。
    相反，如果想使用其他模块导出的变量，函数，类，接口等的时候，你必须要导入它们，可以使用import形式之一。
*/

/*
    可以把一些公共的功能单独抽离成一个文件作为一个模块。
    模块里的变量 函数 类等默认是私有的，如果我们要在外部访问模块里面的数据（变量、函数、类...），
    需要通过export暴露模块里面的数据（变量、函数、类...）。
    暴露后通过import引入模块就可以使用模块里面暴露的数据（变量、函数、类...）。
*/
import { a, b as c } from "./a"
import gData from "./a"
import { A } from "./namespace"

const dog1 = new A.Dog("ABC");
dog1.eat();
 
console.log(a, c);
console.log(gData());