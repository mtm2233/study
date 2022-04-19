/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-18 14:36:22
 * @LastEditTime: 2022-04-19 15:25:20
 * @LastEditors: mTm
 */
import '@/assets/font/iconfont.css'

import '@/styles/image.css';
import img1 from '@/assets/img/icon.png';
// import img1 from '../assets/img/img.jpeg';

const imgEl = document.createElement('img');
imgEl.src = img1;
document.body.appendChild(imgEl);

const imgEl1 = document.createElement('div');
imgEl1.className = 'box-img';
document.body.appendChild(imgEl1);

// icon
const icon = document.createElement('i');
icon.className = 'iconfont icon-bingqilin';
document.body.appendChild(icon);
