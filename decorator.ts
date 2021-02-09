/*
    装饰器：装饰器是一种特殊类型的声明，他能够被附件到类声明，方法，属性或参数上，可以修改类的行为
    通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能
    常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
    装饰器的写法：普通装饰器（无法传参），装饰器工厂（可穿参）
    ES7
 */


//  1、类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。装饰器应用于类构造函数，可以用来监视，修改或替换类定义。

// // 类装饰器:普通装饰器
// function apiConfig(parmas:any) {
//     console.log(parmas);
//     // parmas就是当前类
//     parmas.prototype.apiUrl="xxx";
// }

// @apiConfig
// class Http {
//     constructor() {

//     }
//     getData() {
//        console.log(); 
//     }
// }

// const http:any = new Http();
// console.log(http.apiUrl);
// http.getData();


// 类装饰器: 装饰器工厂
// function apiConfig(apiUrl:string) {
//     return function(target:any) {
//         // target就是当前类
//         target.prototype.apiUrl = apiUrl;
//     }
// }  

// @apiConfig("ABCCC")
// class Http {
//     constructor() {

//     }
//     getData() {
//        console.log(this.apiUrl); 
//     }
// }

// const http:any = new Http();
// console.log(http.apiUrl);
// http.getData();


// 类装饰器：重载构造函数
/*
    类装饰器表达式会在运行时当中函数被调用，类的构造函数作为其唯一的参数
    如果装饰器返回一个值，它会使用提供的构造函数来替换类的声明
*/

// function apiConfig(target:any) {
//     return class extends target {
//         apiUrl = 'apiConfig';
//         getData() {
//             console.log(this.apiUrl);
//         }
//     }
// }  

// @apiConfig
// class Http {
//     public apiUrl: string | undefined;
//     constructor() {
//         this.apiUrl = "HTTP"
//     }
//     getData() {
//         console.log(this.apiUrl);
//     }
// }
// const http = new Http();
// http.getData();


/*
    属性装饰器
    属性装饰器表达式会在运行时当中函数被调用，传入下列两个参数
        1、对于静态成员来说是类的构造函数，对应实例成员是类的原型对象
        2、成员的名字
*/
// function apiConfig(params:string) {
//     return function(target:any, attr:any){
//         target[attr] = params;
//     }
// }  

// class Http {
//     @apiConfig("ABBBC")
//     public apiUrl: string | undefined;
//     getData() {
//         console.log(this.apiUrl);
//     }
// }
// const http = new Http();
// http.getData();


// 方法装饰器
/*
    它会被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义。

    方法装饰器会在运行时传入下列3个参数：
    1、对于静态成员来说是类的构造函数，对应实例成员是类的原型对象。
    2、成员的名字。
    3、成员的属性描述符
*/


// function apiConfig(parmas: string) {
//     return function(target:any,methodName:any,desc:any) {
//         target.url = parmas;
//         // 修改装饰器方法里面传入的所有参数改为string类型

//         // 1、保存当前方法

//         let oMethod = desc.value;
//         desc.value = function(...list:any[]) {
//             list = list.map(v => String(v));
//             console.log(list,"New");
//             oMethod.apply(this,list);
//         }
//     }   
// }


// class Http {
//     public apiUrl: string | undefined;
//     @apiConfig("ABC")
//     getData(...list:any[]) {
//         console.log(list,"Old");
//     }
// }
// const http:any = new Http();
// http.getData(1,"Abc");


/*
    方法参数装饰器
        参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列3个参数：
        1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        2、参数的名字
        3、参数在函数列表中的索引
*/

// function apiConfig(parmas: any) {
//     return function(target:any, methodName:any, paramsIndex:any) {
//         target.apiUrl = parmas;
//     }
// }

// class Http {
//     public apiUrl: string | undefined;
//     getData(@apiConfig('url') url:any) {
//         console.log(url,this.apiUrl);
//     }
// }
// const http:any = new Http();
// http.getData(12345);

// 装饰器执行顺序
/*
    属性2
    属性1
    参数
    方法
    类
*/

// function apiConfig(parmas: any) {
//     return function() {
//         console.log(parmas);
//     }
// }

// @apiConfig('类')
// class Http {
//     @apiConfig('属性1')
//     @apiConfig('属性2')
//     public apiUrl: string | undefined;
//     @apiConfig('方法')
//     getData(@apiConfig('参数') url:any) {}
// }
// const http:any = new Http();
