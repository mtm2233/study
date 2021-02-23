/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-20 10:13:49
 * @LastEditTime: 2021-02-23 16:51:18
 * @LastEditors: mTm
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/setUp" },
  {
    path: "/setUp",
    name: 'setUp',
    meta: {
      title: '初识setUp'
    },
    component: () => import("@/views/compositionApi/setUp/SetUp.vue"),
  },
  { path: "/ref",
    name: 'ref',
    meta: {
      title: 'setUp和ref的基本使用'
    },
    component: () => import("@/views/compositionApi/ref/Ref.vue") 
  },
  {
    path: "/reactive",
    name: 'reactive',
    meta: {
      title: 'reactive的使用'
    },
    component: () => import("@/views/compositionApi/reactive/Reactive.vue") 
  },
  {
    path: "/responsive",
    name: 'responsive',
    meta: {
      title: '比较Vue2和Vue3的响应式及Vue3响应式原理'
    },
    component: () => import("@/views/v2v3/responsive/Responsive.vue") 
  },
  {
    path: "/set-up-detailed",
    name: 'setUpDetailed',
    meta: {
      title: 'setUp detailed'
    },
    component: () => import("@/views/detailed/setUp/Parent.vue") 
  },
  {
    path: "/reactive-ref",
    name: 'ReactiveRef',
    meta: {
      title: 'reactive与ref细节'
    },
    component: () => import("@/views/detailed/reactiveRef/ReactiveRef.vue") 
  },
  {
    path: "/computed-watch",
    name: 'ComputedWatch',
    meta: {
      title: '计算属性与监视'
    },
    component: () => import("@/views/compositionApi/computedWatch/ComputedWatch.vue") 
  },
  {
    path: "/life-cycle",
    name: 'LifeCycle',
    meta: {
      title: '生命周期'
    },
    component: () => import("@/views/v2v3/lifeCycle/LifeCycle.vue") 
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
