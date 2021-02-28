/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-26 23:20:42
 * @LastEditTime: 2021-02-28 14:59:29
 * @LastEditors: mTm
 */
import { TaskI } from './TaskI';
export function setCache(key: string, value: TaskI[]) {
  if (key == "") return false;
  localStorage.setItem(key, JSON.stringify(value));
}

//读取缓存
export function getCache(key: string) {
  return JSON.parse(localStorage.getItem(key)!);
}

//删除缓存
export function removeCache(key: string) {
  localStorage.removeItem(key);
}
