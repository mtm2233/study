<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-23 21:08:12
 * @LastEditTime: 2021-02-23 22:01:38
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>使用vue3的组合API封装的可复用的功能函数</li>
        <li>自定义hook的作用类型于vue2中的mixin技术</li>
        <li>自定义hook的优势：很清楚复用功能代码的来源，更清楚易懂</li>
    </ul>
    <div class="demo">
        <h3>收集用户鼠标点击的页面坐标</h3>
        <p>x: {{ x }}</p>
        <p>y: {{ y }}</p>
        <hr />
        <p v-if="loading">正在加载...</p>
        <template v-else-if="data">
            <p v-for="v in Array.isArray(data) ? data : [data]" :key="v.name">{{ v.name }} -- {{ v.age }}</p>
        </template>
        <p v-else-if="errorMag">errorMag: {{ errorMag }}</p>
    </div>
</template>
<script lang="ts">
import { defineComponent, watch } from "vue";
import useMousePosition from "./hook/useMousePosition";
import useRequest from "./hook/useRequest";
// 定义接口
interface PersonI {
    name: string;
    age: number;
}
export default defineComponent({
    name: "App",
    setup() {
        const { x, y } = useMousePosition();
        // const { loading, data, errorMag } = useRequest<PersonI>('/data/obj.json');
        const { loading, data, errorMag } = useRequest<PersonI[]>('/data/arr.json');
        watch(data, () => {
            console.log(data.value?.length);
        })
        return {
            x,
            y,
            loading,
            data,
            errorMag,
        };
    },
});
</script>
<style>
</style>