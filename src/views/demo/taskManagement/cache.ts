/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-26 23:20:42
 * @LastEditTime: 2021-02-27 00:00:33
 * @LastEditors: mTm
 */
export function setCache(key: any, value: any) {
  if (key == "") return false;
  localStorage.setItem(key, JSON.stringify(value));
}

//读取缓存
export function getCache(key: any) {
  return JSON.parse(localStorage.getItem(key)!);
}

//删除缓存
export function removeCache(key: any) {
  localStorage.removeItem(key);
}
