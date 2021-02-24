<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-24 14:16:24
 * @LastEditTime: 2021-02-24 15:23:10
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>为响应式对象上的某个属性创建一个ref对象,二者内部操作的是同一个数据值更新时二者是同步的</li>
        <li>区别ref：拷贝了一份新的数据值单独操作，更新时互相不影响</li>
        <li>应用：当要将某个prop的ref传递给复合函数时，toRef很有用</li>
    </ul>
    <div class="demo">
        <p>state：{{ state }}</p>
        <p>age：{{ age }}</p>
        <p>money：{{ money }}</p>
        <button @click="update">更新数据</button>
        <hr />
        <Child :age="age" />
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRef, ref } from 'vue';
import Child from './Child.vue'
export default defineComponent({
    name: 'App',
    components: {
        Child,
    },
    setup() {
        const state = reactive({
            age: 5,
            money: 100,
        })
        const age = toRef(state, 'age');
        const money = ref(state.money);
        const update = () => {
            state.age = 10;
            age.value = 15;
            money.value += 100;
            console.log(age, money);
        }
        return {
            state,
            age,
            money,
            update,
        }
    }
});
</script>
<style>
</style>