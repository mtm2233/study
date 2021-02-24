<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-20 11:45:25
 * @LastEditTime: 2021-02-24 10:12:46
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>作用：定义多个数据的响应式</li>
        <li>
            const proxy =
            reactive(obj)：接收一个普通对象然后返回该普通对象的响应式代理器对象<br />
            响应式转换是“深层的”：会影响内部所有嵌套的属性<br />
            内部基于ES6的proxy实现，通过代理对象操作源内部数据都是响应式的<br />
        </li>
        <li>总结：如果操作代理对象，目标对象中的数据也会随之改变，同时界面也要跟着重新更新渲染</li>
    </ul>
    <div class="demo">
        <h3>需求：显示用户的相关信息，点击按钮，更新用户信息</h3>
        <div>
            <p>user--{{ user }}</p>
            <p>obj--{{ obj }}</p>
            <button @click="update">更新数据</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
    name: "reactive",
    setup() {
        const obj = {
            name: "十三",
            age: 13,
            hobby: ["game", "game"],
            a: {
                b: [0],
            },
        };
        //   把数据变成响应式的数据
        //   返回的是一个Proxy的代理对象，被代理的目标对象就是obj对象
        //   user 现在是代理对象，obj是目标对象
        //   此时user的类型是Proxy
        const user = reactive(obj);
        console.log(user);
        const update = () => {
            //   直接使用目标对象的方式进行更新目标对象，是不可以的，只能使用代理对象的方式进行更新对象(响应式数据)，目标对象也会随之改变
            //   obj.name = "十三--"
            user.name += "==";
            user.age++;
            user.hobby.push("name");
        };
        return {
            obj,
            user,
            update,
        };
    },
});
</script>

<style>
</style>
