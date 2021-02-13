"use strict";
// 命名空间
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + "eat");
        };
        return Dog;
    }());
    A.Dog = Dog;
    A.a = 10;
})(A = exports.A || (exports.A = {}));
// declares 'B' locally, but it is not exported
var B;
(function (B) {
    var a = 10;
})(B || (B = {}));
