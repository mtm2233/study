<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-20 11:45:25
 * @LastEditTime: 2021-02-22 09:36:47
 * @LastEditors: mTm
-->
<template>
    <h3>vue2的响应式</h3>
    <ul>
        <li>
            核心
            <ul>
                <li>
                    对象：通过definePropentey对对象的已有属性值的读取和修改进行劫持(监视/拦截)
                </li>
                <li>
                    数组：通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持
                </li>
                <li>
                    <pre>
                      Object.definePropentey(data,'count',{
                        get() {

                        },
                        set() {
                                
                        }
                      })
                  </pre
                    >
                </li>
            </ul>
        </li>
        <li>
            问题
            <ul>
                <li>对象直接新添加的属性或删除已有属性，界面不会自动更新</li>
                <li>
                    直接通过下标替换元素或更新length,界面不会自动更新 arr[1] = []
                </li>
            </ul>
        </li>
    </ul>
    <h3>vue3的响应式</h3>
    <ul>
        <li>
            核心
            <ul>
                <li>
                    <a
                        href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
                        >通过Proxy(代理)：拦截对data任意属性的任意（13种）操作，包括属性值的读写，属性的添加，属性的删除等。。。</a
                    >
                </li>
                <li>
                    <a
                        href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect"
                    >
                        通过Reflect(反射)：动态对被代理对象的相应属性进行特定的操作
                    </a>
                </li>
            </ul>
        </li>
    </ul>

    <div class="demo"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "App",
    setup() {
        const user: any = {
            name: "abc",
            age: "18",
            a: {
                b: [0]
            }
        };
        // 目标对象变成代理对象
        // 参数一：目标对象
        // 参数二：处理器对象，用来监视数据，及数据的操作
        const proxyUser = new Proxy(user,{
            // 获取目的对象的某个属性值
            get(target,prop) {
                console.log('get----');
                return Reflect.get(target,prop)
            },
            // 修改目标对象的属性值/为目标对象添加新的属性
            set(target,prop,val) {
                console.log('set----');
                return Reflect.set(target,prop,val);
            },
            deleteProperty(target,prop) {
                console.log('delete----');
                return Reflect.deleteProperty(target,prop);
            }
        })

        proxyUser.name = '123';
        console.log(proxyUser);

        proxyUser.gender = '男';
        console.log(proxyUser);

        delete proxyUser.name;
        console.log(proxyUser);

        proxyUser.a.b.push(1);
        console.log(proxyUser);

        return {
            proxyUser,
        };
    },
});
</script>

<style>
</style>
