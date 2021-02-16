/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-16 10:56:00
 * @LastEditTime: 2021-02-16 15:15:20
 * @LastEditors: mTm
 */
export default class Food {
    // 食物
    private element: HTMLElement;
    constructor() {
        // 获取food 元素
        this.element = document.getElementById('food')!;
    }

    // 获取食物X坐标
    get X() {
        return this.element.offsetLeft;
    }

    // 获取食物Y坐标
    get Y() {
        return this.element.offsetTop;
    }
}