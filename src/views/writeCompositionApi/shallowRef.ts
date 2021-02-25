/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-25 15:29:54
 * @LastEditTime: 2021-02-25 16:00:03
 * @LastEditors: mTm
 */
export default function shallowRef(target: any) {
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