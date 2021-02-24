<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-24 09:50:11
 * @LastEditTime: 2021-02-24 11:09:47
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>shallowReactive：只处理了对象内最外层属性的响应式（浅响应式）</li>
        <li>ShallowRef：只处理了value的响应式，不进行对象的reactive处理</li>
        <li>什么时候使用浅响应式
            <ul>
                <li>
                    一般情况下使用ref和reactive即可
                </li>
                <li>
                    如果一个对象数据，结构比较深，但变化时只是外层属性变化 ===> shallowReactive
                </li>
                <li>
                    如果一个对象数据，后面会产生新的对象来替换 ===> shallowRef
                </li>
            </ul>
        </li>
    </ul>
    <div class="demo">shallowReactiveShallowRef
        <p>reactive: {{ m1 }}</p>
        <p>shallowReactive: {{ m2 }}</p>
        <p>ref: {{ m3 }}</p>
        <p>shallowRef: {{ m4 }}</p>
        <p>
            <button @click="update">更新数据</button>
        </p>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, shallowReactive, shallowRef } from 'vue';
export default defineComponent({
    name: 'App',
    setup() {
        const m1 = reactive({
            name: 'reactive',
            age: 20,
            a: {
                b: 0
            }
        });
        const m2 = shallowReactive({
            name: 'shallowReactive',
            age: 20,
            a: {
                b: 0
            }
        });
        const m3 = ref({
            name: 'ref',
            age: 20,
            a: {
                b: 0
            }
        });
        const m4 = shallowRef({
            name: 'shallowRef',
            age: 20,
            a: {
                b: 0
            }
        });
        const update = () => {
            // m1.a.b++;
            m2.a.b++;
            // m3.value.a.b++;
            // m4.value.a.b++;
            m4.value.name += "==";
        };
        return {
            m1,
            m2,
            m3,
            m4,
            update,
        }
    }
});
</script>
<style>
</style>