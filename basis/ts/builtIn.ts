/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-19 11:47:58
 * @LastEditTime: 2021-02-19 13:19:12
 * @LastEditors: mTm
 */

//  ECMAScript 内置对象
const b:Boolean = new Boolean(1);
const n:Number = new Number();
const s:String = new String();
const d:Date = new Date();
const reg:RegExp = /^1/;
const err:Error = new Error('error');

// BOM 和 DOM 的内置对象
Window
Document
HTMLElement
DocumentFragment
Event
NodeList

const div:HTMLElement = document.getElementById('test')!;
const divs:NodeList = document.querySelectorAll('div')!;
document.addEventListener('click',(event:MouseEvent) => {
    console.dir(event.target);
})
const fragment:DocumentFragment = document.createDocumentFragment();