/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-20 10:13:49
 * @LastEditTime: 2021-02-24 17:20:40
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
  },
  {
    path: "/custom-hook",
    name: 'CustomHook',
    meta: {
      title: '自定义hook函数'
    },
    component: () => import("@/views/other/customHook/CustomHook.vue") 
  },
  {
    path: "/to-refs",
    name: 'ToRefs',
    meta: {
      title: 'ToRefs'
    },
    component: () => import("@/views/compositionApi/toRefs/ToRefs.vue") 
  },
  {
    path: "/shallowReactive-shallowRef",
    name: 'ShallowReactiveShallowRef',
    meta: {
      title: 'ShallowReactive 与 ShallowRef'
    },
    component: () => import("@/views/compositionApi/shallowReactiveShallowRef/ShallowReactiveShallowRef.vue") 
  },
  {
    path: "/readonly-shallowReadonly",
    name: 'ReadonlyShallowReadonly',
    meta: {
      title: 'Readonly 与 ShallowReadonly'
    },
    component: () => import("@/views/compositionApi/readonlyShallowReadonly/ReadonlyShallowReadonly.vue") 
  },
  {
    path: "/toRaw-markRaw",
    name: 'ToRawMarkRaw',
    meta: {
      title: 'ToRaw 与 MarkRaw'
    },
    component: () => import("@/views/compositionApi/toRawMarkRaw/ToRawMarkRaw.vue") 
  },
  {
    path: "/toRef",
    name: 'ToRef',
    meta: {
      title: 'ToRef'
    },
    component: () => import("@/views/compositionApi/toRef/ToRef.vue")
  },
  {
    path: "/customRef",
    name: 'CustomRef',
    meta: {
      title: 'customRef'
    },
    component: () => import("@/views/compositionApi/customRef/CustomRef.vue")
  },
  {
    path: "/provide-inject",
    name: 'ProvideInject',
    meta: {
      title: 'provide与inject'
    },
    component: () => import("@/views/compositionApi/provideInject/ProvideInject.vue")
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
