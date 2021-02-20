import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/setUp" },
  {
    path: "/setUp",
    name: 'setUp',
    meta: {
      title: '初识setUp'
    },
    component: () => import("@/compositionApi/setUp/SetUp.vue"),
  },
  { path: "/ref",
    name: 'ref',
    meta: {
      title: 'setUp和ref的基本使用'
    },
    component: () => import("@/compositionApi/ref/Ref.vue") 
  },
  {
    path: "/reactive",
    name: 'reactive',
    meta: {
      title: 'reactive的使用'
    },
    component: () => import("@/compositionApi/reactive/Reactive.vue") 
  },
  {
    path: "/responsive",
    name: 'Responsive',
    meta: {
      title: '比较Vue2和Vue3的响应式及Vue3响应式原理'
    },
    component: () => import("@/v2v3/responsive/Responsive.vue") 
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
