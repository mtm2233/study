/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-16 22:00:49
 * @LastEditTime: 2021-02-16 22:52:05
 * @LastEditors: mTm
 */
export default class ScorePanel {
    private scoreEle: HTMLElement;
    private levelEle: HTMLElement;
    // 分数
    private score;
    // 等级
    private level;
    // 最大分数
    private maxLevel;
    // 每级升级所需要的分数
    private levelSore;
    constructor(maxLevel:number = 10, levelSore:number = 10, score:number = 0, level?:number, ) {
        this.score = score;
        this.level = level || Math.floor(this.score/levelSore) || 1;
        this.maxLevel = maxLevel;
        this.levelSore = levelSore;
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.init();
    }

    init() {
        this.scoreAdd(0);
        this.levelUp(0);
    }

    scoreAdd(num:number = 1):void {
        this.scoreEle.innerHTML = (this.score += num) + '';
        if (this.score%this.levelSore === 0 && num) {
            this.levelUp();
        }
    }
    levelUp(num:number = 1):void {
        this.level += num;
        if (this.level <= this.maxLevel) {
            this.levelEle.innerHTML = this.level + ''; 
        } else {
            this.levelEle.innerHTML = this.maxLevel + '';
        }
    }
}