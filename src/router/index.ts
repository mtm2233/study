/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-02-20 10:13:49
 * @LastEditTime: 2021-02-26 13:16:48
 * @LastEditors: mTm
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: { name: "CompositionApi" } },
  {
    path: "/composition-api",
    name: "CompositionApi",
    meta: {
      title: "CompositionApi",
    },
    component: () => import("@/views/layout/BasicLayout.vue"),
    redirect: { name: "SetUp" },
    children: [
      {
        path: "setUp",
        name: "SetUp",
        meta: {
          title: "初识setUp",
        },
        component: () => import("@/views/compositionApi/setUp/SetUp.vue"),
      },
      {
        path: "ref",
        name: "Ref",
        meta: {
          title: "setUp和ref的基本使用",
        },
        component: () => import("@/views/compositionApi/ref/Ref.vue"),
      },
      {
        path: "reactive",
        name: "Reactive",
        meta: {
          title: "reactive的使用",
        },
        component: () => import("@/views/compositionApi/reactive/Reactive.vue"),
      },
      {
        path: "computed-watch",
        name: "ComputedWatch",
        meta: {
          title: "计算属性与监视",
        },
        component: () =>
          import("@/views/compositionApi/computedWatch/ComputedWatch.vue"),
      },
      {
        path: "to-refs",
        name: "ToRefs",
        meta: {
          title: "ToRefs",
        },
        component: () => import("@/views/compositionApi/toRefs/ToRefs.vue"),
      },
      {
        path: "shallowReactive-shallowRef",
        name: "ShallowReactiveShallowRef",
        meta: {
          title: "ShallowReactive 与 ShallowRef",
        },
        component: () =>
          import(
            "@/views/compositionApi/shallowReactiveShallowRef/ShallowReactiveShallowRef.vue"
          ),
      },
      {
        path: "readonly-shallowReadonly",
        name: "ReadonlyShallowReadonly",
        meta: {
          title: "Readonly 与 ShallowReadonly",
        },
        component: () =>
          import(
            "@/views/compositionApi/readonlyShallowReadonly/ReadonlyShallowReadonly.vue"
          ),
      },
      {
        path: "toRaw-markRaw",
        name: "ToRawMarkRaw",
        meta: {
          title: "ToRaw 与 MarkRaw",
        },
        component: () =>
          import("@/views/compositionApi/toRawMarkRaw/ToRawMarkRaw.vue"),
      },
      {
        path: "toRef",
        name: "ToRef",
        meta: {
          title: "ToRef",
        },
        component: () => import("@/views/compositionApi/toRef/ToRef.vue"),
      },
      {
        path: "customRef",
        name: "CustomRef",
        meta: {
          title: "customRef",
        },
        component: () =>
          import("@/views/compositionApi/customRef/CustomRef.vue"),
      },
      {
        path: "provide-inject",
        name: "ProvideInject",
        meta: {
          title: "provide与inject",
        },
        component: () =>
          import("@/views/compositionApi/provideInject/ProvideInject.vue"),
      },
      {
        path: "write-composition-api",
        name: "WriteCompositionApi",
        meta: {
          title: "WriteCompositionApi",
        }, 
        component: () =>
          import("@/views/compositionApi/writeCompositionApi/WriteCompositionApi.vue"),
      },
    ],
  },
  {
    path: "/detailed",
    name: "Detailed",
    meta: {
      title: "Detailed",
    },
    component: () => import("@/views/layout/BasicLayout.vue"),
    redirect: { name: "ReactiveRef" },
    children: [
      {
        path: "reactive-ref",
        name: "ReactiveRef",
        meta: {
          title: "reactive与ref细节",
        },
        component: () => import("@/views/detailed/reactiveRef/ReactiveRef.vue"),
      },
      {
        path: "set-up-detailed",
        name: "setUpDetailed",
        meta: {
          title: "setUp detailed",
        },
        component: () => import("@/views/detailed/setUp/Parent.vue"),
      },
    ],
  },
  {
    path: "/components",
    name: "Components",
    meta: {
      title: "Components",
    },
    component: () => import("@/views/layout/BasicLayout.vue"),
    redirect: { name: "Fragment" },
    children: [
      {
        path: "fragment",
        name: "Fragment",
        meta: {
          title: "Fragment(片段)",
        },
        component: () => import("@/views/components/fragment/Fragment.vue"),
      },
      {
        path: "teleport",
        name: "Teleport",
        meta: {
          title: "Teleport(瞬移)",
        },
        component: () => import("@/views/components/teleport/Teleport.vue"),
      },
      {
        path: "suspense",
        name: "Suspense",
        meta: {
          title: "Suspense(不确定的)",
        },
        component: () => import("@/views/components/suspense/Suspense.vue"),
      },
    ],
  },
  {
    path: "/other",
    name: "Other",
    meta: {
      title: "Other",
    },
    component: () => import("@/views/layout/BasicLayout.vue"),
    redirect: { name: "CustomHook" },
    children: [
      {
        path: "custom-hook",
        name: "CustomHook",
        meta: {
          title: "自定义hook函数",
        },
        component: () => import("@/views/other/customHook/CustomHook.vue"),
      },
      {
        path: "judgment-type",
        name: "JudgmentType",
        meta: {
          title: "响应式数据类型判断",
        },
        component: () => import("@/views/other/judgmentType/JudgmentType.vue"),
      },
    ],
  },
  {
    path: "/v2v3",
    name: "V2v3",
    meta: {
      title: "V2v3",
    },
    component: () => import("@/views/layout/BasicLayout.vue"),
    redirect: { name: "Responsive" },
    children: [
      {
        path: "responsive",
        name: "Responsive",
        meta: {
          title: "比较Vue2和Vue3的响应式及Vue3响应式原理",
        },
        component: () => import("@/views/v2v3/responsive/Responsive.vue"),
      },
      {
        path: "life-cycle",
        name: "LifeCycle",
        meta: {
          title: "生命周期",
        },
        component: () => import("@/views/v2v3/lifeCycle/LifeCycle.vue"),
      },
      {
        path: "async-import",
        name: "AsyncImport",
        meta: {
          title: "动态引入组件",
        },
        component: () => import("@/views/v2v3/asyncImport/AsyncImport.vue"),
      },
      
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
