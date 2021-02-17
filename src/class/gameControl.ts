/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-17 13:13:52
 * @LastEditTime: 2021-02-18 00:04:17
 * @LastEditors: mTm
 */
import Food from './food'
import ScorePanel from './scroePanel'
import Snake from './snake'

// const food = new Food(350, 10);
// const scorePanel = new ScorePanel(35);
// const snake = new Snake();

export default class GameControl {
    private food:Food;
    private snake:Snake;
    private scorePael:ScorePanel;
    private speed:number;
    private direction:string = '';
    private isLive:boolean = true;
    private boxW:number = 350;

    constructor(speed:number = 10) {
        this.food = new Food();
        this.snake = new Snake();
        this.scorePael = new ScorePanel();
        this.speed = speed;
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