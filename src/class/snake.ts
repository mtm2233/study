/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-16 22:53:58
 * @LastEditTime: 2021-02-16 23:09:18
 * @LastEditors: mTm
 */
export default class Snake {
    private element: HTMLElement;
    private head: HTMLElement;
    // 包括 head
    private bodies: HTMLCollection;
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    get X():number {
        return this.head.offsetLeft;
    }

    get Y():number {
        return this.head.offsetTop;
    }

    set X(num:number) {
        this.head.style.left = `${num}px`;
    }

    set Y(num:number) {
        this.head.style.top = `${num}px`;
    }

    bodiesAdd() {
        this.element.insertAdjacentElement("beforeend",document.createElement("div"));
    }
}