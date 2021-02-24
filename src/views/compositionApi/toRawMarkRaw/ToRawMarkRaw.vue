<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-24 11:43:54
 * @LastEditTime: 2021-02-24 14:15:17
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>toRaw
            <ul>
                <li>返回由reactive或readonly方法转换成响应式代理的普通对象</li>
                <li>这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发页面刷新</li>
            </ul>
        </li>
        <li>
            markRaw
            <ul>
                <li>标记一个对象，使其永远不会转换为代理。返回对象本身</li>
                <li>
                    应用场景：
                    <ul>
                        <li>有些值不应被设置为响应式，例如复杂的第三方类实例或vue实例对象</li>
                        <li>当渲染具有不可变数据的大列表时，跳过代理转换可以提高性能</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
    <div class="demo">
        <p>toRaw: {{ date1 }}</p>
        <p>
            <button @click="changeDate1">toRaw</button>
        </p>
        <p>
            <button @click="changeDate2">markRaw</button>
        </p>
    </div>
</template>
<script lang="ts">
import { defineComponent, markRaw, reactive, toRaw } from 'vue';
interface UserInfo {
    name: string;
    age: number;
    a?: number[];
}
export default defineComponent({
    name: 'App',
    setup() {
        const date1 = reactive<UserInfo>({
            name: 'abc',
            age: 19,
        });
        const changeDate1 = () => {
            const user = toRaw(date1);
            user.name = 'aaaa';
            console.log(user);
        };
        const a = [1,2];
        date1.a = markRaw(a);
        const changeDate2 = () => {
            if (date1.a) {
                date1.a[0] += 2;
            }
            console.log(date1);
        };

        return {
            date1,
            changeDate1,
            changeDate2,
        }
    }
});
</script>
<style>
</style>