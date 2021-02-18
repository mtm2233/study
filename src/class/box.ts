/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-18 22:02:00
 * @LastEditTime: 2021-02-18 22:27:01
 * @LastEditors: mTm
 */
export default  class Box {
    private element: HTMLElement;
    private w:number;
    constructor(w:number) {
        this.w = w;
        this.element = document.getElementById('box')!;
        this.init();
    }
    init() {
        this.element.style.width = `${this.w}px`;
        this.element.style.height = `${this.w}px`;
    }
}