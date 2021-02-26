<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-26 13:12:57
 * @LastEditTime: 2021-02-26 13:34:19
 * @LastEditors: mTm
-->
<template>
    <ul>
        <li>
            vue2
            <pre>
                const AsyncComponents = () => import('./componets/AsyncComponnets.vue'); 
            </pre>
        </li>

        <li>
            vue3
            <pre>
                import { defineComponent, defineAsyncComponent } from "vue";
                const AsyncComponents = defineAsyncComponent(() => import('./componets/AsyncComponnets.vue'));
            </pre>
        </li>
    </ul>
    <div class="demo">
        <AsyncComponents />
    </div>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
// const AsyncComponents = () => import('./componets/AsyncComponnets.vue');
const AsyncComponents = defineAsyncComponent(
    () => import("./componets/AsyncComponnets.vue")
);
export default defineComponent({
    name: "App",
    components: {
        AsyncComponents,
    },
    setup() {
        return {
        };
    },
});
</script>
<style>
</style>