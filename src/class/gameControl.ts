/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-17 13:13:52
 * @LastEditTime: 2021-02-18 22:33:16
 * @LastEditors: mTm
 */
import Food from './food'
import ScorePanel from './scroePanel'
import Snake from './snake'
import Box from './box';

interface Params {
    // 速度
    speed?:number,
    // 食物宽度
    foodW?:number,
    // 游戏容器宽度
    boxW?:number,
    // 蛇身每一节的宽度
    snakeDivW?:number,
    // 初始分数
    score?:number,
    // 初始等级
    level?:number,
    // 最大等级
    maxLevel?:number,
    // 每升一级所需的分数
    levelSore?:number,
}

export default class GameControl {
    // class 实例
    private food:Food;
    private snake:Snake;
    private scorePael:ScorePanel;
    private box:Box;

    // 游戏容器
    private boxW:number = 350;
    // 食物
    private foodW:number = 10;
    // 蛇
    private snakeDivW:number = 10;
    private direction:string = '';
    private speed:number = 10;
    // 计分牌
    private score:number = 0;
    private level:number = 1;
    private maxLevel:number = 10;
    private levelSore:number = 10;

    private isLive:boolean = true;


    constructor(params:Params = {}) {
        Object.keys(params).forEach(k => this[k] = params[k]);
        this.box = new Box(this.boxW);
        this.food = new Food(this.boxW, this.foodW);
        this.snake = new Snake(this.boxW, this.snakeDivW);
        this.scorePael = new ScorePanel(this.maxLevel,this.levelSore,this.score,this.level);
        
        this.init();
    }

    init() {
        // 绑定键盘事件
        document.addEventListener('keydown',this.keyDownHandler.bind(this));
    }

    keyDownHandler(e:KeyboardEvent) {
        if (['w','s','a','d'].includes(e.key)) {
            if (!this.direction) {
                this.direction = e.key;
                this.run();
            } else {
                this.direction = e.key;
            }
        }
    }

    run() {
        let x = this.snake.X;
        let y = this.snake.Y;
        switch(this.direction) {
            case "w":
                y -= this.speed;
                break;
            case "s":
                y += this.speed;
                break;
            case "a":
                x -= this.speed;
                break;
            case "d":
                x += this.speed;
                break;
        }
        try {
            this.snake.X = x;
            this.snake.Y = y;
        }catch(e) {
            alert(e.message + 'Game Over');
            this.isLive = false;
        }
        this.checkEat();
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePael.level - 1) * 30);
    }

    checkEat() {
        if (this.snake.X === this.food.X && this.snake.Y === this.food.Y) {
            this.snake.bodiesAdd();
            this.food.change();
            this.scorePael.scoreAdd();
        }
    }
}