/*
 * @Description: 
 * @Author: mTm
 * @Date: 2020-10-26 21:53:30
 * @LastEditTime: 2021-02-19 11:43:39
 * @LastEditors: mTm
 */
// class Person {
//     name:string; // 属性 省略了public关键字
//     constructor(n:string) {
//         this.name = n;
//     }
//     run():void{
//         console.log(this.name);
//     }
// }


// class Person {
//     name: string;  // 属性 省略了public关键字
//     constructor(name: string) {  // 构造函数 实例化类的时候触发的方法
//         this.name = name;
//     }
//     getName():string {
//         return this.name
//     }
//     setName(name:string):void {
//         this.name = name
//     }
// }


// class Person {
//     name: string;  // 属性 省略了public关键字
//     constructor(name: string) {  // 构造函数 实例化类的时候触发的方法
//         this.name = name;
//     }
//     getName():string {
//         return this.name
//     }
//     setName(name:string):void {
//         this.name = name
//     }
// }

// class Person1 extends Person {
//     constructor(name:string) {
//         super(name);
//     }
//     run():string {
//         return this.name + "run"
//     }
// }

// const p1 = new Person1('wan');
// p1.run()

// class Person {
//     private name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():void {
//         console.log(`${this.name}--Person`)
//     }
// }
// class Person1 extends Person {
//     constructor(name:string) { 
//         super(name)
//     }
//     work():void {
//         console.log(`${this.name}--Person1`); // 报错
//     }
// }

// const p = new Person('dre')
// const p1 = new Person1('ddd')
// p.run() // dre--Person
// p1.work() // ddd--Person1
// console.log(p1.name); // 报错
// console.log(p.name); // 报错

// class Person {
//     public name:string;
//     static age:number = 18;
//     constructor(name:string) {
//         this.name = name
//     }
//     static print() {
//         // 不能直接调用类里面的属性
//         // console.log("print" + this.name); // 报错
//         console.log("print" + this.age);
//         // console.log("print" + Person.age);
//     }
//     run() {
//         console.log(this.name + "run");
//     }
//     work() {
//         console.log(this.name + "work");
//     }
// }

// const p = new Person('abc')
// p.run() // abcrun
// Person.print() // print18

// 多态： 父类定义一个方法不去实现，让继承它的字类去实现 每一个字类都有不同的表现
// 多态属于继承

// class Animal {
//     name:string
//     constructor(name:string) {
//         this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }
// }

// class Dog extends Animal {
//     constructor(name:string) {
//         super(name)
//     }
//     eat() {
//         console.log(this.name + "Dog");
//     }
// }

// class Cat extends Animal {
//     constructor(name:string) {
//         super(name)
//     }
//     eat() {
//         console.log(this.name + "Cat");
//     }
// }


// ts中的抽象类，它是提供其他方法的基类，不能直接被实例化
// 用abstract关键字定义的抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// abstract 抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准
// abstract class Animal{
//     public name:string
//     constructor(name:string) {
//         this.name = name
//     }
//     abstract eat():string
// }
// // var n = new Animal() // 无法创建抽象类的实例

// class Dog extends Animal {
//     constructor(name:string) {
//         super(name)
//     }
//     // 必须实现抽象类里的方法
//     eat() {
//         return "Dog" + this.name
//     }
// }


// class Person1 {
//     readonly name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     private run() {
//         console.log(this.name + "--Person")
//     }
// }
// const person = new Person1('aaa');
// person.name = 'bbb'; // 报错

// class Box {
//     private w:number;
//     constructor(w:number) {
//         this.w = w;
//     }

//     get W() {
//         return this.w;
//     }

//     set W(val:number) {
//         if (val === 0) {
//             throw new Error('val 不能为 0')
//         }
//         this.w = val;
//     }
    
// }

// const box = new Box(10);
// console.log(box.w); // 属性“w”为私有属性，只能在类“Box”中访问
// console.log(box.W);
// box.W = 0; // val 不能为 0
// box.W = 15;