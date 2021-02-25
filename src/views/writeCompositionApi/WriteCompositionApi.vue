<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-25 13:13:03
 * @LastEditTime: 2021-02-25 14:51:01
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
import shallowReadonly from './shallowReadonly';
import readonly from './readonly';
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
        // shallowReactiveP.a += 5; // 读 写
        // delete shallowReactiveP.a; // 删
        // shallowReactiveP.b.c = 10; // 读
        // delete shallowReactiveP.b.c; // 读

        // console.log(shallowReactiveP);
        // console.log('-----------------shallowReactive_end-------------------');

        // console.log('-----------------reactive_start-------------------');
        // const reactiveP = reactive({
        //     a: 5,
        //     b: {
        //         c: 6
        //     }
        // })
        // reactiveP.a += 5; // 读 写
        // delete reactiveP.a; // 删
        // reactiveP.b.c = 10; // 读 写
        // delete reactiveP.b.c; // 读 删

        // console.log(reactiveP);
        // console.log('-----------------reactive_end-------------------');

        // const shallowReadonlyP = shallowReadonly({
        //     a: 5,
        //     b: {
        //         c: 6
        //     }
        // });

        // console.log('-----------------shallowReadonly_start-------------------');
        // console.log(shallowReadonlyP.a); // 读
        // shallowReadonlyP.a += 1; // error
        // delete shallowReadonlyP.a; // error
        // shallowReadonlyP.b.c = 10; // 读
        // delete shallowReadonlyP.b.c; // 读
        // console.log('-----------------shallowReadonly_end-------------------');


        const readonlyP = readonly({
            a: 5,
            b: {
                c: 6
            }
        });

        console.log('-----------------readonly_start-------------------');
        console.log(readonlyP.a); // 读
        readonlyP.a += 1; // error
        delete readonlyP.a; // error
        readonlyP.b.c = 10; // 读 error
        delete readonlyP.b.c; // 读 error
        console.log('-----------------readonly_end-------------------');

        return {
            shallowReactive,
            reactive,
            shallowReadonly,
            readonly,
        }
    }
});
</script>
<style>
</style>