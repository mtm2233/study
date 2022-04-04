/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-02-07 09:10:57
 * @LastEditTime: 2022-04-04 17:35:05
 * @LastEditors: mTm
 */
Function.prototype.mtBind = function(oThis) {
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var aArgs = Array.prototype.slice.call(arguments, 1),
    fToBind = this,
    fNOP = function() {},
    fBound = function() {
      return fToBind.apply(
        this instanceof fNOP && oThis ? this : oThis || window,
        aArgs.concat(Array.prototype.slice.call(arguments))
      );
    };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};

function foo() {
  console.log(this);
}

const bar = foo.mtBind()
new bar()
bar()
const obj = {bar}
obj.bar()