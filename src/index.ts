/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-09 16:18:07
 * @LastEditTime: 2021-02-16 23:10:08
 * @LastEditors: mTm
 */
import '@/style/index'

import Food from '@/class/food'
import ScorePanel from '@/class/scroePanel'
import Snake from '@/class/snake'

const food = new Food(350, 10);
const scorePanel = new ScorePanel(35);
const snake = new Snake();
snake.bodiesAdd();

food.change();