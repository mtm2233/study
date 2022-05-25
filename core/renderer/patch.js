/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-05-25 20:36:17
 * @LastEditTime: 2022-05-25 21:44:21
 * @LastEditors: mTm
 */
import { mount } from './index.js';

export default function patch(n1, n2, anchor) {
  // tag
  if (n1.tag !== n2.tag) {
    const parent = n1.el.parentNode;
    parent.removeChild(n1.el);
    mount(n2, parent, anchor);
  } else {
    const el = (n2.el = n1.el);
    // 1. props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};

    // 1.1 移除旧的props
    for (const key in oldProps) {
      if (!(key in newProps)) {
        el.removeAttribute(key);
      }
    }

    //  1.2 添加新的props
    for (const key in newProps) {
      if (newProps[key] !== oldProps[key]) {
        el.setAttribute(key, newProps[key]);
      }
    }

    // 2.children
    const oldChildren = n1.children;
    const newChildren = n2.children;

    if (typeof newChildren === 'string') {
      if (oldChildren !== newChildren) {
        el.textContent = newChildren;
      }
    } else {
      if (typeof oldChildren === 'string') {
        el.textContent = '';
        newChildren.forEach(vnode => mount(vnode, el));
      } else {
        const commonLen = Math.min(oldChildren.length, newChildren.length);
        let i = 0;

        // 2.1.尝试替换
        for (; i < commonLen; i++) {
          patch(oldChildren[i], newChildren[i], (oldChildren[i + 1] || {}).el);
        }

        // 2.2.移除多的旧节点
        if (i < oldChildren.length) {
          for (; i < oldChildren.length; i++) {
            el.removeChild(oldChildren[i].el)
          }
        }
        
        // 2.3.添加新的节点
        if (i < newChildren.length) {
          for (; i < newChildren.length; i++) {
            mount(newChildren[i], el)
          }
        }
      }
    }
  }
}
