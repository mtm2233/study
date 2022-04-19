/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-19 22:32:19
 * @LastEditTime: 2022-04-19 23:23:32
 * @LastEditors: mTm
 */
import '@/assets/font/iconfont.css';
import img1 from '@/assets/img/icon.png';

const imgEl = document.createElement('img');
imgEl.src = img1;
document.body.appendChild(imgEl);

const icon = document.createElement('i');
icon.className = 'iconfont icon-xingsu';
icon.style.fontSize = '200px';
document.body.appendChild(icon);
