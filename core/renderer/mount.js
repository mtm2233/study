/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-05-25 19:56:23
 * @LastEditTime: 2022-05-25 21:44:15
 * @LastEditors: mTm
 */
export default function mount(vnode, container, anchor = null) {
  const { tag, props, children } = vnode
  const el = vnode.el = document.createElement(tag)
  
  if (props) {
    for (const key in props) {
      const val = props[key]
      const lowerKey = key.toLowerCase()
      if (/^on/.test(lowerKey)) {
        el.addEventListener(lowerKey.slice(2), val)
      } else {
        el.setAttribute(lowerKey, val)
      }
    }
  }

  if (Array.isArray(children)) {
    children.forEach(itemVnode => mount(itemVnode, el))
  } else {
    el.textContent = children;
  }

  container.insertBefore(el, anchor)
}