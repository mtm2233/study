<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-25 13:13:03
 * @LastEditTime: 2021-02-25 14:02:04
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li></li>
    </ul>
    <div class="demo"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import shallowReactive from './shallowReactive';
import reactive from './reactive';
export default defineComponent({
    name: 'App',
    setup() {
        // console.log('-----------------shallowReactive_start-------------------');
        // const shallowReactiveP = shallowReactive({
        //     a: 5,
        //     b: {
        //         c: 6
        //     }
        // })
        // // 读 写
        // shallowReactiveP.a += 5;
        // // 删
        // delete shallowReactiveP.a;
        // // 读
        // shallowReactiveP.b.c = 10;
        // // 读
        // delete shallowReactiveP.b.c;

        // console.log(shallowReactiveP);
        // console.log('-----------------shallowReactive_end-------------------');

        console.log('-----------------reactiveP_start-------------------');
        const reactiveP = reactive({
            a: 5,
            b: {
                c: 6
            }
        })
        // 读 写
        reactiveP.a += 5;
        // 删
        delete reactiveP.a;
        // 读 写
        reactiveP.b.c = 10;
        // 读 删
        delete reactiveP.b.c;

        console.log(reactiveP);
        console.log('-----------------reactiveP_end-------------------');


        return {
            shallowReactive,
            reactive,
        }
    }
});
</script>
<style>
</style>