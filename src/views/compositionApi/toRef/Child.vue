<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-24 15:22:03
 * @LastEditTime: 2021-02-24 15:32:25
 * @LastEditors: mTm
-->
<template>
    <div class="demo">
        <p>age: {{ age }}</p>
        <p>length: {{ length }}</p>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, Ref, toRef } from 'vue';
function useGetLength(age: Ref) {
    return computed(() => {
        return age.value.toString().length
    })
}
export default defineComponent({
    name: 'App',
    props: {
        age: {
            type: Number,
            require: true,
        }
    },
    setup(props) {
        const length = useGetLength(toRef(props,'age'));
        return {
            length,
        }
    }
});
</script>
<style>
</style>