<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-26 11:36:56
 * @LastEditTime: 2021-02-26 13:49:34
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>它们允许我们的应用程序在等待异步组件渲染的时渲染一些后备内容，可以让我们创建一个平滑的用户体验</li>
    </ul>
    <div class="demo">
        <Suspense>
            <template #default>
                <!-- 异步组件 -->
                <AsyncComponents />
            </template>
            <template #fallback>
                <h2>loading</h2>
            </template>
        </Suspense>
    </div>
</template>
<script lang="ts">
// import { defineComponent, defineAsyncComponent } from "vue";
// const AsyncComponents = defineAsyncComponent(
//     () => import("./componets/AsyncComponnets.vue")
// );
import { defineComponent } from "vue";
import AsyncComponents from './componets/AsyncComponnets.vue';
export default defineComponent({
    name: 'App',
    components: {
        AsyncComponents,
    },
    setup() {
        return {
        }
    }
});
</script>
<style>
</style>