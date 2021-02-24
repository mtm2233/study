<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-24 15:52:31
 * @LastEditTime: 2021-02-24 16:16:12
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>创建一个自定义的ref,并对其依赖项跟踪和更新触发进行显示控制</li>
        <li>需求：使用customRef实现debounced的实例</li>
    </ul>
    <div class="demo">
        <input type="text" v-model="keyword">
        <p>
            {{ keyword }}
        </p>
    </div>
</template>
<script lang="ts">
import { customRef, defineComponent } from 'vue';
function useDebouncedRef<T>(value: T, delay = 200) {
    let timeOutId: number;
    return customRef((tarck, trigger) => {
        return {
            // 返回数据的
            get() {
                // 告诉Vue追踪数据
                tarck();
                return value;
            },
            // 设置数据
            set(newValue: T) {
                clearTimeout(timeOutId);
                timeOutId = setTimeout(() => {
                    value = newValue;
                    trigger()
                }, delay)
            },
            
        }
    })
}
export default defineComponent({
    name: 'App',
    setup() {
        const keyword = useDebouncedRef('abc', 500);
        return {
            keyword,
        }
    }
});
</script>
<style>
</style>