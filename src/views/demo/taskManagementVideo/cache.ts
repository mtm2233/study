/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-26 23:20:42
 * @LastEditTime: 2021-02-28 14:57:12
 * @LastEditors: mTm
 */
import { Todo } from "./types/Todo";
export function setCache(key: string, value: Todo[]) {
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
