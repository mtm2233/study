/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-16 10:56:00
 * @LastEditTime: 2021-02-18 22:26:40
 * @LastEditors: mTm
 */
export default class Food {
    // 食物
    private element: HTMLElement;
    private area:number;
    private itself:number;
    constructor(area:number,itself:number,) {
        if (area % itself) {
            throw `food的宽需要可以被盒子的宽整除`
        }
        // 获取food 元素
        this.element = document.getElementById('food')!;
        this.area = area;
        this.itself = itself;
        this.init();
    }

    init() {
        this.element.style.width = `${this.itself}px`;
        this.element.style.height = `${this.itself}px`;
        let divs = this.element.querySelectorAll('div');
        divs.forEach(v => {
            v.style.width = `${this.itself * 0.4}px`;
            v.style.height = `${this.itself * 0.4}px`;
        })
    }

    // 获取食物X坐标
    get X() {
        return this.element.offsetLeft;
    }

    // 获取食物Y坐标
    get Y() {
        return this.element.offsetTop;
    }

    change():void {
        const {area, itself} = this;
        const num = area/itself - 1;
        const eXY = () => `${Math.floor(Math.random() * num) * itself}px`;
        this.element.style.top = eXY();
        this.element.style.left = eXY();
    }
}