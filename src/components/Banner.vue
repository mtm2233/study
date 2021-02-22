<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-20 10:54:40
 * @LastEditTime: 2021-02-22 21:50:56
 * @LastEditors: mTm
-->
<template>
    <div class="banner">
        <h2>{{ $route.meta.title }}</h2>
        <ul class="navs">
            <li
                v-for="item in banners"
                :key="item.name"
                :class="{ nav: true, current: item.name === $route.name }"
                @click="goPath(item.name)"
            >
                {{ item.meta.title }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "VBanner",
    computed: {
        banners() {
            return this.$router.options.routes.filter((v) => v.name);
        },
    },
    methods: {
        goPath(name: string) {
            if (this.$route.name === name) {
                return;
            }
            this.$router.push({
                name,
            });
        },
    },
});
</script>

<style scoped>
.banner {
    margin: 0 20px;
    overflow-y: auto;
}
.navs {
    margin-top: 20px;
}
.nav {
    padding: 5px 0;
    cursor: pointer;
    color: darkblue;
    white-space: nowrap;
}
.current {
    color: darkorange;
}
</style>
