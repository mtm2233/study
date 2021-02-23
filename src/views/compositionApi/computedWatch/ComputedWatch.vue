<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-23 15:19:09
 * @LastEditTime: 2021-02-23 16:32:45
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>
            computed函数：
            <ul>
                <!-- <li>与computed配置功能一致</li> -->
                <li>返回的是一个Ref类型的对象</li>
                <li>计算属性的函数中如果直传入一个回调函数，表示的是get</li>
                <li>计算属性的函数中如果直传入一个对象，setter和getter</li>
                <li>
                    <pre>
                        {
                            get() {},
                            set(val) {},
                        }
                    </pre>
                </li>
                <!-- <li>有setter和getter</li> -->
            </ul>
        </li>
        <li>
            watch函数
            <ul>
                <li>与watch配置功能一致</li>
                <li>监视指定的一个或多个响应式数据，一旦数据变化，就自动执行监视回调</li>
                <li>监视指定一个不执行回调，但可以通过配置immediate为true,来指定初始时立即执行一次</li>
                <li>通过配置deep: true,来指定深度监听</li>
            </ul>
        </li>
        <li>
            watchEffect函数
            <ul>
                <li>不用直接指定要监视的数据，回调函数中使用的哪些响应式数据就监视哪些响应式数据</li>
                <li>默认初始时就立即执行一次，从而可以收集需要监视的数据</li>
                <li>监视数据发生变化时回调</li>
            </ul>
        </li>
    </ul>
    <div class="demo">
        <fieldset>
            {{ surnam }}
            <legend>姓名操作</legend>
            姓氏：<input type="text" placeholder="姓氏" v-model="user.surnam">
            名字：<input type="text" placeholder="名字" v-model="user.name">
        </fieldset>
        <fieldset>
            <legend>计算属性和监视</legend>
            名字：<input type="text" placeholder="名字显示" v-model="fullName1">
            名字：<input type="text" placeholder="名字显示" v-model="fullName2">
            名字：<input type="text" placeholder="名字显示" v-model="fullName3">
        </fieldset>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, watch, watchEffect } from 'vue';
export default defineComponent({
    name: 'App',
    watch: {
        surnam: {
            handler(v) {
                console.log(v);
            }
        }
    },
    setup() {
        const user = reactive({
            surnam: 'a',
            name: 'bc',
        })

        // 计算属性
        const fullName1 = computed(() => {
            return user.surnam + '_' + user.name;
        });

        const fullName2 = computed({
            get() {
                return user.surnam + '_' + user.name;
            },
            set(val: string) {
                [user.surnam,user.name] = val.split('_');
            },
        });

        const fullName3 = ref('');
        // 监视
        // watch(user, ({surnam, name}) => {
        //     fullName3.value = surnam + '_' + name
        // }, { immediate: true, deep: true });

        // watchEffect(() => {
        //     fullName3.value = user.surnam + '_' + user.name
        // });

        // 监视fullName3的数据，user
        watchEffect(() => {
            [user.surnam,user.name] = fullName3.value.split('_');
        });

        // // watch--可以监听多个数据
        // watch([user.surnam,user.name],() => {
        //     // 这里的代码没有执行，因为 user.surnam,user.name 不是响应式的数据
        //     console.log('watch--可以监听多个数据');
        // })

        // 使用watch监视非响应式的数据
        watch([() => user.surnam,() => user.name],() => {
            console.log('watch--可以监听多个数据');
        })

        return {
            user,
            fullName1,
            fullName2,
            fullName3,
        }
    },
});
</script>
<style>
</style>