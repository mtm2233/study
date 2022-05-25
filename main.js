/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-05-25 18:59:55
 * @LastEditTime: 2022-05-25 21:44:01
 * @LastEditors: mTm
 */
import { createApp, h } from "./core/index.js";

const app = createApp({
  data() {
    return {
      count: 1
    }
  },
  methods: {
    adder() {
      this.count++
    },
    double(num) {
      return num * 2
    }
  },
  render() {
    return h('div', { class: 'box1' }, [
      h('h3', null, `${this.count}`),
      h('h3', null, `double：${this.double(this.count)}`),
      h('button', {
        onClick: this.adder
      }, '+1')
    ])
  }
})

app.mount('#app')