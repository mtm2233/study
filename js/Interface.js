"use strict";
/*
 * @Description:
 * @Author: mTm
 * @Date: 2020-10-29 21:44:12
 * @LastEditTime: 2020-11-29 13:23:52
 * @LastEditors: mTm
 */
// 接口
// 定义标准
// 接口是一种规范的定义、定义了行为和动作的规范、限制和规范的作用
// 接口定义了某一批类所需要遵守的规范、接口不关心这些类的内部状态数据、也不关心这些类里方法的实现细节、
// 只规定这批类里必须提供的某些方法、提供这些方法的类就可以满足实际需要
// ts中的接口类似于java、同时还增加了更加灵活的接口类型、包括
// 属性、函数、可索引和类等
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
    };
    Person.prototype.work = function () {
    };
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    return Teacher;
}(Person));
