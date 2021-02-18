/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-16 22:53:58
 * @LastEditTime: 2021-02-18 22:26:51
 * @LastEditors: mTm
 */
export default class Snake {
    private element: HTMLElement;
    private head: HTMLElement;
    // 包括 head
    private bodies: HTMLCollection;
    private boxW:number;
    private divW:number;
    constructor(boxW:number, divW:number) {
        if (boxW % divW) {
            throw new Error(`snake div 的宽需要可以被盒子的宽整除`);
        }
        this.boxW = boxW;
        this.divW = divW;
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
        this.init();
    }

    init() {
        for(let i = 1; i<this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            bd.style.width = `${this.divW}px`;
            bd.style.height = `${this.divW}px`;
        }
    }

    get X():number {
        return this.head.offsetLeft;
    }

    get Y():number {
        return this.head.offsetTop;
    }

    set X(num:number) {
        this.setXY('X',num);
    }

    set Y(num:number) {
        this.setXY('Y',num);
    }

    setXY(k:string,num:number) {
        if (this[k] === num) {
            return;
        }
        if (num < 0 || num  >= this.boxW) {
            throw new Error("蛇撞墙了")
        }

        let offset = 'offsetTop';
        let style = 'top';
        if (k === 'X') {
            offset = 'offsetLeft';
            style = 'left';
        }

        if (this.bodies[1] && (this.bodies[1] as HTMLElement)[offset] === num) {
            if (num > this[k]) {
                num = this[k] - (num - this[k]);
            } else {
                num = this[k] + (this[k] - num);
            }
        }
        this.moveBodies();
        this.head.style[style] = `${num}px`;
        this.checkHeadBodies();
    }

    bodiesAdd() {
        let div = document.createElement("div");
        const len = this.bodies.length - 1;
        div.style.left = `${(this.bodies[len] as HTMLElement).offsetLeft}px`;
        div.style.top = `${(this.bodies[len] as HTMLElement).offsetTop}px`;
        this.element.insertAdjacentElement("beforeend",div);
    }

    moveBodies() {
        // 将后面身体设为前面身体的位置
        for(let i = this.bodies.length - 1; i>0; i--) {
            (this.bodies[i] as HTMLElement).style.left = `${(this.bodies[i - 1] as HTMLElement).offsetLeft}px`;
            (this.bodies[i] as HTMLElement).style.top = `${(this.bodies[i - 1] as HTMLElement).offsetTop}px`;
        }
    }

    checkHeadBodies() {
        for(let i = 1; i<this.bodies.length; i++) {
            const bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己了');
            }
        }
    }
}