<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-23 14:11:57
 * @LastEditTime: 2021-02-23 15:02:05
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>是vue3的composition API中2个最重要的响应式API(ref,reactive)</li>
        <li>
            ref用来处理基本类型数据<br />
            reactive用来处理对象(递归深度响应式)
        </li>
        <li>
            如果用ref对象/数组，内部会自动将对象/数组转换reactive的代理对象
        </li>
        <li>
            ref内部：通过给value属性添加getter/setter来实现对对象的劫持
        </li>
        <li>reactive内部：通过使用Proxy来实现对对象内部所以数据的劫持，并通过Reflect操作对象内部数据</li>
        <li>ref的数据操作：在js中要使用.value，在模板中不需要（内部解新模板时会自动添加.value）</li>
    </ul>
    <div class="demo">
        <p>ref1: {{ ref1 }}</p>
        <p>reactiveO: {{ reactiveO }}</p>
        <p>refO: {{ refO }}</p>
        <p>
            <button @click="update">update</button>
        </p>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
    name: "App",
    setup() {
        const ref1 = ref('a');
        const reactiveO = reactive({
            name: 'reactiveO',
            a: {
                aName: 'reactiveOa'
            }
        });
        const refO = ref({
            name: 'refO',
            a: {
                aName: 'refOa'
            }
        });
        const update = () => {
            console.log(refO);
            ref1.value += '==';
            reactiveO.a.aName += '==';
            refO.value.a.aName += '==';
        }
        return {
            ref1,
            reactiveO,
            refO,
            update,
        };
    }
});
</script>
<style>
</style>