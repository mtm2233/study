/*
 * @Description: 收集用户鼠标点击的页面坐标
 * @Author: mTm
 * @Date: 2021-02-23 21:23:16
 * @LastEditTime: 2021-02-23 21:25:43
 * @LastEditors: mTm
 */
import { onBeforeUnmount, onMounted, ref } from 'vue';
export default function() {
  const x = ref(-1);
  const y = ref(-1);
  const clickHandler = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };

  onMounted(() => {
    window.addEventListener("click", clickHandler);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", clickHandler);
  });
  return {
    x,
    y,
  };
}
