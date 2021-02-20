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
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
