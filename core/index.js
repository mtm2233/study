/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-05-25 20:58:32
 * @LastEditTime: 2022-05-25 21:44:35
 * @LastEditors: mTm
 */
import { mount, h, patch } from './renderer/index.js';
import { watchEffect, reactive } from './reactive.js';

function createApp(rootComponent) {
  const data = reactive(rootComponent.data());
  const methods = rootComponent.methods;

  // methods 绑定this
  for (const key in methods || {}) {
    data[key] = methods[key].bind(data);
  }

  // 绑定 属性、方法
  const render = rootComponent.render.bind(data);
  let isMounted = false;
  let oldVnode = null;

  watchEffect(() => {
    if (!isMounted) {
      oldVnode = render();
    } else {
      const newVnode = render();
      patch(oldVnode, newVnode);
      oldVnode = newVnode;
    }
  });

  return {
    mount(selector) {
      const container = document.querySelector(selector);
      if (!isMounted) {
        mount(oldVnode, container);
        isMounted = true;
      }
    },
  };
}

export { mount, h, patch, watchEffect, reactive, createApp };
