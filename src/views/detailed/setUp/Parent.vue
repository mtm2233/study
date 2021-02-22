<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-22 10:00:55
 * @LastEditTime: 2021-02-22 22:32:21
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>setup执行的时机
            <ul>
                <li>setup中一般返回一个函数，对象中的属性和方法都可以在html模板中直接使用</li>
                <li>setup是在beforeCreate生命周期回调之前就执行了，而且就执行了一次<br/>
                    setup执行时，当前组件还没有创建出<br/>
                    this为undefined，不能通过this来访问data/computed/methods/props
                </li>
                <li>其实所有的composition Api相关回调函数中也都不可以</li>
            </ul>
        </li>
        <li>setup的返回值
            <ul>
                <li>一般都返回一个对象：为模板提供数据，模板可以使用此对象的属性，方法</li>
                <li>返回对象中的属性与data函数返回对象的属性合并成为组件对象的属性</li>
                <li>返回对象中的方法会与methods中的方法合并成为组件对象的方法</li>
                <li>如果重名，setup优先</li>
                <li>主要：</li>
                <li>一般不要混合使用：methods中可以访问setup提供的属性、方法，但在setup方法中不能访问data,methods</li>
                <li>setup不能是一个async函数：因为返回值不再是return的对象，而是promise,模板看不到return对象中的属性，方法</li>
            </ul>
        </li>
        <li>
            setup的参数
            <ul>
                <li>setup(props,context)/setup(props,{attrs,slots,emit})</li>
                <li>props:包含props配置声明并传入了的所有属性的对象</li>
                <li>attrs:包含没有在props配置中声明的属性的对象，相当于this.$attrs</li>
                <li>slots:包含所有传入的插槽内容的对象，相当于this.$slots</li>
                <li>emit:用来分发自定义事件的函数，相当于this.$emit</li>
            </ul>
        </li>
    </ul>
    <h2>父级</h2>
    <div class="demo">
        {{ msg }}
        <button @click="msg += '123'">更新数据</button>
    </div>
    <hr />
    <Child :msg="msg" :a="123" @change="a" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

import Child from "./Child.vue";
export default defineComponent({
    name: "Parent",
    components: {
        Child,
    },
    beforeCreate() {
        console.log('Parent--beforeCreate执行了');
    },
    // 页面渲染完毕
    mounted() {
        console.log('Parent--mounted', this);
    },
    data() {
        return {
            // msg: '我是data里的msg'
            name: 'name',
        }
    },
    methods: {
        b() {
            console.log('Parent--bbb');
        }
    },
    setup() {
        console.log("Parent--setup执行了", this);
        const msg = ref("ref");
        function a() {
            console.log('Parent--123');
        }
        return {
            msg,
            a,
        };
    },
});
</script>
<style>
</style>