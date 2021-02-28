/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-26 15:17:54
 * @LastEditTime: 2021-02-28 09:24:08
 * @LastEditors: mTm
 */
import {ref, reactive} from 'vue'
import { setCache, getCache } from './cache'
const CACHENAME = 'taskManagement';
class Task {
    public task: any;
    public inputValue: any;
    public selectAll: any;
    constructor() {
        this.inputValue = ref('');
        this.selectAll = ref(false);
        this.init();
    }
    // 选择全部
    set SelectAll(val: any) {
        this.selectAll.value = val;
        this.taskSelect(val);
    }
    // 已选择的数量
    get SelectNum() {
        return this.task.filter((v: any) => v.isChecked).length || 0;
    }
    init() {
        if (getCache(CACHENAME)) {
            this.task = reactive(getCache(CACHENAME) as any);
            this.isSelectAll();
        } else {
            this.task = reactive([
                {
                    value: 'demo',
                    id: 0,
                    isChecked: false, 
                }
            ]);
        }
    }
    values() {
        const { task, inputValue, selectAll, clearSelect, taskSelect } = this;
        return {
            task,
            inputValue,
            selectAll,
            clearSelect,
            taskSelect,
        }
    }
    addTask() {
        if (!this.inputValue.value) return;
        const task = this.task;
        // const len = task.length;
        // const newId = task[len - 1] ? task[len - 1].id + 1 : 0;
        const newId = task[0] ? task[0].id + 1 : 0;
        task.unshift({
            id: newId,
            value: this.inputValue.value,
            isChecked: false,
        })
        this.inputValue.value = '';
        setCache(CACHENAME,this.task);
    }
    // 全选、全不选、单个
    taskSelect = (isSelect: boolean | number) => {
        if (typeof isSelect === 'boolean') {
            this.task.forEach((v: any) => {
                v.isChecked = isSelect;
            })
        } else {
            const selectItem = this.task.find((v: any) => v.id === isSelect);
            selectItem.isChecked = !selectItem.isChecked;
            this.isSelectAll();
        }
        setCache(CACHENAME, this.task);
    }

    // 清除选中
    clearSelect = (num: number | undefined) => {
        const isNum = num !== undefined && !isNaN(num);
        const delIndex = isNum ? this.task.findIndex((v: any) => v.id === num) : this.task.findIndex((v: any) => v.isChecked);
        if(delIndex >= 0) {
            this.task.splice(delIndex, 1);
            this.clearSelect(num);
        } else {
            this.isSelectAll();
            setCache(CACHENAME,this.task);
            return;
        }
    }

    // 是否全选
    isSelectAll() {
        this.selectAll.value = this.task.length && this.task.every((v: any) => v.isChecked);
    }
}

export default new Task()