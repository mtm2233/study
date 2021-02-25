import reactive from "./reactive";

/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-25 16:01:07
 * @LastEditTime: 2021-02-25 16:05:29
 * @LastEditors: mTm
 */
export default function ref(target: any) {
    target = reactive(target);
    return {
        _value: target,
        get value() {
            console.log('劫持读取操作');
            return this._value;
        },
        set value(val) {
            console.log('劫持修改操作，准备更新界面');
            this._value = val;
        }
    }
}