<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-25 13:13:03
 * @LastEditTime: 2021-02-25 13:32:59
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
export default defineComponent({
    name: 'App',
    setup() {
        console.log('-----------------shallowReactive_start-------------------');
        const shallowReactiveP = shallowReactive({
            a: 5
        })
        console.log(shallowReactiveP.a);
        shallowReactiveP.a = 5;
        shallowReactiveP.b = 10;
        delete shallowReactiveP.a;
        console.log(shallowReactiveP);
        console.log('-----------------shallowReactive_end-------------------');


        return {

        }
    }
});
</script>
<style>
</style>